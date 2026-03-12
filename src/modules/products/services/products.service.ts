import { AppDataSource } from "../../../config/data-source";
import { Product } from "../entities/product.entity";
import { User } from "../../users/entities/user.entity";

const productRepository = AppDataSource.getRepository(Product);
const userRepository = AppDataSource.getRepository(User);

const searchPosProducts = async ( userId: string, query?: string, categoryId?: string) => {
  const user = await userRepository.findOne({ where: { id: userId } });
  if (!user || !user.branchId) return "USER_OR_BRANCH_NOT_FOUND";
  
  const queryBuilder = productRepository.createQueryBuilder("product")
    .leftJoinAndSelect("product.category", "category")
    .where("product.branchId = :branchId", { branchId: user.branchId })
    .andWhere("product.isActive = :isActive", { isActive: true });

    // Búsqueda por nombre o SKU
    if (query) {
        queryBuilder.andWhere(
            "(product.name ILIKE :query OR product.sku ILIKE :query)",
            { query: `%${query}%` }
        );
    }

    // Filtro por categoría
    if (categoryId) {
        queryBuilder.andWhere("product.categoryId = :categoryId", { categoryId });
    }

    // Ordenar alfabéticamente
    queryBuilder.orderBy("product.name", "ASC");

    const products = await queryBuilder.getMany();
    return products;
};

export { searchPosProducts };