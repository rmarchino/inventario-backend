import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Supplier } from "./supplier.entity";
import { SupplierInvoice } from "./supplier-invoice.entity";
import { CashSession } from "../../cash/entities/cash.entity";

@Entity("supplier_payments")
export class SupplierPayment {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "supplier_id" })
  supplierId!: string;

  @Column({ name: "invoice_id", nullable: true })
  invoiceId!: string;

  @Column({ name: "cash_session_id" })
  cashSessionId!: string;

  @Column({ name: "payment_method", length: 20 })
  paymentMethod!: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  amount!: number;

  @Column({ type: "text", nullable: true })
  reference!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  // RELACIONES CON OTRAS ENTIDADES
  @ManyToOne(() => Supplier, (supplier) => supplier.payments)
  @JoinColumn({ name: "supplier_id" })
  supplier!: Supplier;

  @ManyToOne(() => SupplierInvoice, (invoice) => invoice.payments)
  @JoinColumn({ name: "invoice_id" })
  invoice!: SupplierInvoice;

  @ManyToOne(() => CashSession)
  @JoinColumn({ name: "cash_session_id" })
  cashSession!: CashSession;
}
