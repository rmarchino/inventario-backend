import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { CashSession } from "./cash.entity";
import { User } from "../../users/entities/user.entity";

@Entity("cash_movements")
export class CashMovement {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "cash_session_id" })
  cashSessionId!: string;

  @Column({ name: "user_id" })
  userId!: string;

  @Column({ name: "movement_type" })
  movementType!: string;

  @Column({ name: "amount", type: "decimal", precision: 10, scale: 2 })
  amount!: number;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  // Relación con CashSession
  @ManyToOne(() => CashSession)
  @JoinColumn({ name: "cash_session_id" })
  cashSession!: CashSession;

  // Relación con User
  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user!: User;
}
