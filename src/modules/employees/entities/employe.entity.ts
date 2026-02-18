import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Branch } from "../../branches/entities/branch.entity";
import { PayrolPayment } from "../../payments/entities/payroll-payment.entity";

@Entity("employees")
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "user_id", nullable: true })
  userId!: string | null;

  @Column({ name: "branch_id", nullable: true })
  branchId!: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  salary!: number;

  @Column({ name: "payment_frequency", length: 20, default: "MONTHLY" })
  paymentFrequency!: string;

  @Column({ name: "hire_date", type: "date", nullable: true })
  hireDate!: Date;

  @Column({ length: 20, default: "ACTIVE" })
  status!: string;

  // RELACIONES CON OTRAS ENTIDADES
  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToOne(() => Branch)
  @JoinColumn({ name: "branch_id" })
  branch!: Branch;

  @OneToMany(() => PayrolPayment, (payment) => payment.employee)
  payments!: PayrolPayment[];
}
