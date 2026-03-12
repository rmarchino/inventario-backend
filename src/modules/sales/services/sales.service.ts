import { AppDataSource } from "../../../config/data-source";
import { Sale } from "../entities/sale.entity";
import { CashSession, CashStatus } from "../../cash/entities/cash.entity";

const saleRepository = AppDataSource.getRepository(Sale);
const cashSessionRepository = AppDataSource.getRepository(CashSession);

const getTodaySummary = async (userId: string) => {
  // 1. Buscar la caja abierta del usuario
  const openSessionCash = await cashSessionRepository.findOne({
    where: { userId, status: CashStatus.OPEN },
  });

  // Si no hay caja abierta, no hay ventas para mostrar
  if (!openSessionCash) {
    return { salesCount: 0, totalAmount: 0 };
  }

  // 2. Sumar las ventas de  ESA sessión de caja específica
  const result = await saleRepository
    .createQueryBuilder("sale")
    .select("COUNT(sale.id)", "salesCount")
    .addSelect("SUM(sale.total)", "totalAmount")
    .where("sale.cashSessionId = :sessionId", { sessionId: openSessionCash.id })
    .andWhere("sale.status = :status", { status: "COMPLETED" })
    .getRawOne();

  return {
    salesCount: Number(result.salesCount) || 0,
    totalAmount: Number(result.totalAmount) || 0,
  };
};


export { getTodaySummary }