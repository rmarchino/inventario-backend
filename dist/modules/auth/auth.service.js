"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = exports.loginUser = void 0;
const data_source_1 = require("../../config/data-source");
const user_entity_1 = require("../users/entities/user.entity");
const bcrypt_handle_1 = require("../../shared/utils/bcrypt.handle");
const jwt_handle_1 = require("../../shared/utils/jwt.handle");
const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.User);
const loginUser = async ({ username, password }) => {
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
    if (!user)
        return "USER_NOT_FOUND";
    // 2. Verificar contraseña
    const passwordHash = user.password_hash;
    const isCorrect = await (0, bcrypt_handle_1.verified)(password, passwordHash);
    if (!isCorrect)
        return "PASSWORD_INCORRECT";
    // 3. Generar token JWT
    const token = (0, jwt_handle_1.generateToken)(user.id);
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
exports.loginUser = loginUser;
const registerUser = async (authUser) => {
    //1. Verificar si el username ya existe
    const checkIs = await userRepository.findOne({
        where: { username: authUser.username },
    });
    if (checkIs)
        return "USER_ALREADY_EXISTS";
    // 2. Encriptar contraseña
    const passwordHash = await (0, bcrypt_handle_1.encrypt)(authUser.password);
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
exports.registerUser = registerUser;
//# sourceMappingURL=auth.service.js.map