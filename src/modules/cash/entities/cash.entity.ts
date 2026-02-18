import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Branch } from "../../branches/entities/branch.entity";
import { User } from "../../users/entities/user.entity";
import { Sale } from "../../sales/entities/sale.entity";

export enum CashStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

@Entity("cash_sessions")
export class CashSession {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "branch_id" })
  branchId!: string;

  @Column({ name: "user_id" })
  userId!: string;

  @Column({ name: "opening_amount", type: "decimal", precision: 10, scale: 2 })
  openingAmount!: number;

  @Column({
    name: "closing_amount",
    type: "decimal",
    precision: 10,
    scale: 2,
    nullable: true,
  })
  closingAmount!: number;

  @Column({
    name: "calculated_amount",
    type: "decimal",
    precision: 10,
    scale: 2,
    nullable: true,
  })
  calculatedAmount!: number;

  @Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
  difference!: number;

  @CreateDateColumn({ name: "opened_at", type: "timestamptz" })
  openedAt!: Date;

  @Column({ name: "closed_at", type: "timestamptz", nullable: true })
  closedAt!: Date;

  @Column({ type: "varchar", length: 20, default: CashStatus.OPEN })
  status!: CashStatus;

  @Column({ type: "text", nullable: true })
  notes!: string;

  // RELACIONES CON OTRAS ENTIDADES
  @ManyToOne(() => Branch)
  @JoinColumn({ name: "branch_id" })
  branch!: Branch;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @OneToMany(() => Sale, (sale) => sale.cashSession)
  sales!: Sale[];
}
