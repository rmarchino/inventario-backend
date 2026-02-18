import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Branch } from "../../branches/entities/branch.entity";
import { ExpenseCategory } from "./expense-category.entity";
import { CashSession } from "../../cash/entities/cash.entity";

@Entity("expenses")
export class Expense {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "branch_id" })
  branchId!: string;

  @Column({ name: "category_id" })
  categoryId!: string;

  @Column({ name: "cash_session_id" })
  cashSessionId!: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  amount!: number;

  @Column({ name: "payment_method", length: 20, default: "EFECTIVO" })
  paymentMethod!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  // Relaciones
  @ManyToOne(() => Branch)
  @JoinColumn({ name: "branch_id" })
  branch!: Branch;

  @ManyToOne(() => ExpenseCategory, (category) => category.expenses)
  @JoinColumn({ name: "category_id" })
  category!: ExpenseCategory;

  @ManyToOne(() => CashSession)
  @JoinColumn({ name: "cash_session_id" })
  cashSession!: CashSession;
}
