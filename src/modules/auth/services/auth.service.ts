import bcrypt from "bcryptjs";
import { randomInt } from "crypto";
import { AppDataSource } from "../../../config/data-source";
import { User } from "../../users/entities/user.entity";
import {
  AuthLoginDto,
  AuthLoginPinCodeDto,
  AuthLoginPinCodeSchema,
  AuthRegisterDto,
} from "../dto/auth.dto";
import { encrypt, verified } from "../../../shared/utils/bcrypt.handle";
import { generateToken } from "../../../shared/utils/jwt.handle";

const userRepository = AppDataSource.getRepository(User);

const generateRamdomPinCode = (): string => {
  //return Math.floor(1000 + Math.random() * 9000).toString();
  return randomInt(1000, 10000).toString();
};

const generateUniquePinCode = async (): Promise<string> => {
  let pin: string;
  let exists = true;

  while (exists) {
    pin = generateRamdomPinCode();

    const user = await userRepository.findOne({
      where: { pin_code: pin },
    });

    exists = !!user;
  }

  return pin!;
};

const loginPinCode = async ({ pinCode }: AuthLoginPinCodeDto) => {
  const user = await userRepository
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.role", "role")
    .leftJoinAndSelect("user.branch", "branch")
    .where("user.pin_code = :pinCode", { pinCode })
    .andWhere("user.is_active = :isActive", { isActive: true })
    .getOne();

  if (!user) return "PIN_INCORRECT_OR_USER_INACTIVE";

  const token = generateToken(user.id!);

  return {
    token,
    user: {
      id: user.id,
      fullName: user.full_name,
      role: user.role?.name,
      branchId: user.branch?.id,
    },
  };
};

const loginUser = async ({ username, password }: AuthLoginDto) => {
  // 1. Buscar usuario por username
  // Usamos addSelect porque el campo password_hash tiene select: false en la entidad
  const user = await userRepository
    .createQueryBuilder("user")
    .addSelect("user.password_hash")
    .leftJoinAndSelect("user.role", "role")
    .leftJoinAndSelect("user.branch", "branch")
    .where("user.username = :username", { username })
    .andWhere("user.is_active = :isActive", { isActive: true })
    .getOne();

  if (!user) return "USER_NOT_FOUND";

  // 2. Verificar contraseña
  const passwordHash = user.password_hash;
  const isCorrect = await verified(password, passwordHash!);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  // 3. Generar token JWT
  const token = generateToken(user.id!);

  // 4. Retornar datos (sin el hash)
  const data = {
    token,
    user: {
      id: user.id,
      fullName: user.full_name,
      role: user.role?.name,
      branch: user.branch?.name,
      branchId: user.branch?.id,
    },
  };
  return data;
};

const registerUser = async (authUser: AuthRegisterDto) => {
  //1. Verificar si el username
  const checkIs = await userRepository.findOne({
    where: { username: authUser.username },
  });

  if (checkIs) return "USER_ALREADY_EXISTS";

  // 2. Encriptar password
  const passwordHash = await encrypt(authUser.password);

  // 3. Determinar pinCode
  let pinCode = authUser.pinCode;

  if (!pinCode) {
    pinCode = await generateUniquePinCode();
  } else {
    const existPin = await userRepository.findOne({
      where: { pin_code: pinCode },
    });

    if (existPin) return "PIN_CODE_ALREADY_EXISTS";
  }

  // 4. Crear nuevo usuario
  const newUser = userRepository.create({
    full_name: authUser.fullName,
    username: authUser.username,
    password_hash: passwordHash,
    pin_code: pinCode,
    ...(authUser.branchId && { branchId: authUser.branchId }),
    ...(authUser.roleId && { roleId: authUser.roleId }),
  });

  // 5. Guardar
  const userSaved = await userRepository.save(newUser);

  // 6. Retornar datos (sin el hash)
  return userSaved;
};

export { loginUser, loginPinCode, registerUser };
