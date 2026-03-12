import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Branch } from "../../branches/entities/branch.entity";
import { User } from "../../users/entities/user.entity";
import { CashSession } from "../../cash/entities/cash.entity";
import { Customer } from "../../customers/entities/customer.entity";
import { SaleItem } from "./sale-item.entity";
import { SunatDocument } from "../../sunat/entities/sunat-document.entity";

@Entity("sales")
export class Sale {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "branch_id" })
  branchId!: string;

  @Column({ name: "seller_id", nullable: true })
  sellerId!: string;

  @Column({ name: "cash_session_id" })
  cashSessionId!: string;

  @Column({ name: "customer_id", nullable: true })
  customerId!: string;

  @Column({ name: "payment_method", length: 20 })
  paymentMethod!: string;

  @Column({ name: "receipt_type", length: 20 })
  receiptType!: string; // BOLETA, FACTURA

  @Column({ name: "receipt_series", length: 10, nullable: true })
  receiptSeries!: string;

  @Column({ name: "receipt_number", length: 20, nullable: true })
  receiptNumber!: string;

  // Totales
  @Column({ type: "decimal", precision: 10, scale: 2 })
  subtotal!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  igv!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  total!: number;

  // Desglose de pagos
  @Column({
    name: "cash_amount",
    type: "decimal",
    precision: 10,
    scale: 2,
    default: 0,
  })
  cashAmount!: number;

  @Column({
    name: "digital_amount",
    type: "decimal",
    precision: 10,
    scale: 2,
    default: 0,
  })
  digitalAmount!: number;

  @Column({ length: 20, default: "COMPLETED" })
  status!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  // RELACIONES CON OTRAS ENTIDADES
  @ManyToOne(() => Branch)
  @JoinColumn({ name: "branch_id" })
  branch!: Branch;

  @ManyToOne(() => User)
  @JoinColumn({ name: "seller_id" })
  seller!: User;

  @ManyToOne(() => CashSession, (cashSession) => cashSession.sales)
  @JoinColumn({ name: "cash_session_id" })
  cashSession!: CashSession;

  @ManyToOne(() => Customer, (customer) => customer.sales)
  @JoinColumn({ name: "customer_id" })
  customer!: Customer;

  @OneToMany(() => SaleItem, (item) => item.sale, { cascade: true })
  saleItems!: SaleItem[];

  @OneToOne(() => SunatDocument, (doc) => doc.sale)
  sunatDocument!: SunatDocument;
}
