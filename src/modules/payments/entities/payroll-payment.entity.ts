import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Employee } from "../../employees/entities/employe.entity";
import { CashSession } from "../../cash/entities/cash.entity";

@Entity("payroll_payments")
export class PayrolPayment {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "employee_id" })
  employeeId!: string;

  @Column({ name: "cash_session_id" })
  cashSessionId!: string;

  @Column({ name: "payment_type", length: 20 })
  paymentType!: string; // SALARY, BONUS, ADVANCE

  @Column({ type: "decimal", precision: 10, scale: 2 })
  amount!: number;

  @Column({ type: "text", nullable: true })
  note!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  // RELACIONES CON OTRAS ENTIDADES
  @ManyToOne(() => Employee, (employee) => employee.payments)
  @JoinColumn({ name: "employee_id" })
  employee!: Employee;

  @ManyToOne(() => CashSession)
  @JoinColumn({ name: "cash_session_id" })
  cashSession!: CashSession;
}
