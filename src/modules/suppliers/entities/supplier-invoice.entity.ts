import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Supplier } from "./supplier.entity";
import { Branch } from "../../branches/entities/branch.entity";
import { SupplierInvoiceItem } from "./supplier-invoice-item.entity";
import { SupplierPayment } from "./supplier-payment.entity";

export enum InvoiceStatus {
  PENDING = "PENDING",
  PARTIAL = "PARTIAL",
  PAID = "PAID",
  CANCELED = "CANCELED",
}

@Entity("supplier_invoices")
export class SupplierInvoice {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "supplier_id" })
  supplierId!: string;

  @Column({ name: "branch_id" })
  branchId!: string;

  @Column({ name: "invoice_number", length: 50, nullable: true })
  invoiceNumber!: string;

  @Column({ name: "invoice_date", type: "timestamptz", nullable: true })
  invoiceDate!: Date;

  // Montos
  @Column({ type: "decimal", precision: 10, scale: 2 })
  subtotal!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  igv!: number;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  total!: number;

  @Column({ length: 20, default: InvoiceStatus.PENDING })
  status!: InvoiceStatus;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  // RELACIONES CON OTRAS ENTIDADES
  @ManyToOne(() => Supplier, (supplier) => supplier.invoices)
  @JoinColumn({ name: "supplier_id" })
  supplier!: Supplier;

  @ManyToOne(() => Branch)
  @JoinColumn({ name: "branch_id" })
  branch!: Branch;

  @OneToMany(() => SupplierInvoiceItem, (item) => item.invoice, {
    cascade: true,
  })
  items!: SupplierInvoiceItem[];

  @OneToMany(() => SupplierPayment, (payment) => payment.invoice)
  payments!: SupplierPayment[];
}
