import bcrypt from "bcryptjs";
import { AppDataSource } from "../../config/data-source";
import { User } from "../users/entities/user.entity";
import { AuthLoginDto, AuthRegisterDto } from "./dto/auth.dto";
import { encrypt, verified } from "../../shared/utils/bcrypt.handle";
import { generateToken } from "../../shared/utils/jwt.handle";

const userRepository = AppDataSource.getRepository(User);

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
  //1. Verificar si el username ya existe
  const checkIs = await userRepository.findOne({
    where: { username: authUser.username },
  });

  if (checkIs) return "USER_ALREADY_EXISTS";

  // 2. Encriptar contraseña
  const passwordHash = await encrypt(authUser.password);

  // 3. Crear nuevo usuario
  const newUser = userRepository.create({
    full_name: authUser.fullName,
    username: authUser.username,
    password_hash: passwordHash,
    ...(authUser.branchId && { branchId: authUser.branchId }),
    ...(authUser.roleId && { roleId: authUser.roleId }),
    ...(authUser.pinCode && { pin_code: authUser.pinCode }),
  });

    // 4. Guardar
    const userSaved = await userRepository.save(newUser);

    // 5. Retornar datos (sin el hash)
    return userSaved;
};

export { loginUser, registerUser };