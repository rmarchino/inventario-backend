import { AppDataSource } from "../../../config/data-source";
import { CashSession, CashStatus } from "../entities/cash.entity";
import { User } from "../../users/entities/user.entity";
import { OpenCashSessionDto } from "../dtos/cash-session.dto";

const cashSessionRepository = AppDataSource.getRepository(CashSession);
const userRepository = AppDataSource.getRepository(User);

const checkCashStatus = async (userId: string) => {
  const user = await userRepository.findOne({ where: { id: userId } });
  if (!user || !user.branchId) return "USER_OR_BRANCH_NOT_FOUND";

  // Verificar si hay caja abierta
  const openCashSession = await cashSessionRepository.findOne({
    where: {
      branchId: user.branchId,
      status: CashStatus.OPEN,
    },
    relations: ["user"],
  });

  if (!openCashSession) {
    return {
      isOpen: false,
      message:
        "La caja está cerrada. Debe abrir la caja para comenzar a vender.",
    };
  }

  return {
    isOpen: true,
    session: {
      id: openCashSession.id,
      openedAt: openCashSession.openedAt,
      openingAmout: openCashSession.openingAmount,
      openedBy: openCashSession.user.full_name,
    },
  };
};

const openCashSession = async (userId: string, data: OpenCashSessionDto) => {
  const user = await userRepository.findOne({ where: { id: userId } });
  if (!user || !user.branchId) return "USER_OR_BRANCH_NOT_FOUND";

  // Verificar si hay caja abierta
  const existingSession = await cashSessionRepository.findOne({
    where: { branchId: user.branchId, status: CashStatus.OPEN },
  });

  if (existingSession) return "CASH_ALREADY_OPEN";

  const newSession = cashSessionRepository.create({
    branchId: user.branchId,
    userId: user.id,
    openingAmount: data.openingAmount,
    status: CashStatus.OPEN,
    ...(data.notes && { notes: data.notes }),
  });

  const sessionSaved = await cashSessionRepository.save(newSession);
  return sessionSaved;
};

export { checkCashStatus, openCashSession };
