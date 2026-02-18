import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { CashSession } from "./cash.entity";

@Entity("cash_counts")
export class CashCount {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "cash_session_id" })
  cashSessionId!: string;

  @Column({ default: 0 })
  bill_10!: number;

  @Column({ default: 0 })
  bill_20!: number;

  @Column({ default: 0 })
  bill_50!: number;

  @Column({ default: 0 })
  bill_100!: number;

  @Column({ default: 0 })
  bill_200!: number;

  // Tottales
  @Column({
    name: "coin_total",
    type: "decimal",
    precision: 10,
    scale: 2,
    default: 0,
  })
  coinTotal!: number;

  @Column({ name: "counted_total", type: "decimal", precision: 10, scale: 2 })
  countedTotal!: number;

  @Column({ name: "expected_total", type: "decimal", precision: 10, scale: 2 })
  expectedTotal!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  difference!: number;

  @Column({ type: "text", nullable: true })
  observation!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  // Relación con CashSession
  @ManyToOne(() => CashSession)
  @JoinColumn({ name: "cash_session_id" })
  cashSession!: CashSession;
}
