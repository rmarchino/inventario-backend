import { AppDataSource } from "../../../config/data-source";
import { User } from "../entities/user.entity";
import { UpdateUserDto } from "../dtos/user.dto";

const userRepository = AppDataSource.getRepository(User);

// 1. Get all users
const getAllUsers = async () => {
  const users = await userRepository.find({
    relations: ["role", "branch"],
  });
  return users;
};

// 2. Get user by ID
const getUserById = async (id: string) => {
  const user = await userRepository.findOne({
    where: { id },
    relations: ["role", "branch"],
  });
  return user;
};

// 3. Update user
const updateUser = async (id: string, data: UpdateUserDto) => {
  const userToUpdate = await userRepository.findOne({ where: { id } });
  if (!userToUpdate) return "USER_NOT_FOUND";

  // Validar username duplicado
  if (data.username && data.username !== userToUpdate.username) {
    const existUsername = await userRepository.findOne({
      where: { username: data.username },
    });
    if (existUsername) return "USERNAME_ALREADY_IN_USE";
  }

  // Validar PIN duplicado
  if (data.pinCode && data.pinCode !== userToUpdate.pin_code) {
    const existPin = await userRepository.findOne({
      where: { pin_code: data.pinCode },
    });
    if (existPin) return "PIN_ALREADY_IN_USE";
  }

  const dataToUpdate = {
    ...(data.fullName && { full_name: data.fullName }),
    ...(data.username && { username: data.username }),
    ...(data.branchId && { branchId: data.branchId }),
    ...(data.roleId && { roleId: data.roleId }),
    ...(data.pinCode && { pin_code: data.pinCode }),
    ...(data.isActive !== undefined && { is_active: data.isActive }),
  };

  // TypeORM hace merge de los datos nuevos
  userRepository.merge(userToUpdate, dataToUpdate);
  const userUpdated = await userRepository.save(userToUpdate);
  return userUpdated;
};

// 4. Delete user
const deleteUser = async (id: string) => {
  const userToDelete = await userRepository.findOne({ where: { id } });
  if (!userToDelete) return "USER_NOT_FOUND";

  userToDelete.is_active = false;
  await userRepository.save(userToDelete);
  return "USER_DEACTIVATED";
};

export { getAllUsers, getUserById, updateUser, deleteUser };
