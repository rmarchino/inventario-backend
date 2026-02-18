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
import { SupplierInvoice } from "./supplier-invoice.entity";
import { SupplierPayment } from "./supplier-payment.entity";

@Entity("suppliers")
export class Supplier {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "branch_id", nullable: true })
  branchId!: string;

  @Column({ name: "document_type", length: 20, default: "RUC" })
  documentType!: string;

  @Column({ name: "document_number", length: 20, nullable: true })
  documentNumber!: string;

  @Column({ name: "business_name", length: 200 })
  businessName!: string;

  @Column({ name: "contact_name", length: 150, nullable: true })
  contactName!: string;

  @Column({ length: 150, nullable: true })
  email!: string;

  @Column({ length: 20, nullable: true })
  phone!: string;

  @Column({ type: "text", nullable: true })
  address!: string;

  @Column({ name: "bank_account", type: "text", nullable: true })
  bankAccount!: string;

  @Column({ name: "is_active", default: true })
  isActive!: boolean;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  // RELACIONES CON OTRAS ENTIDADES
  @ManyToOne(() => Branch)
  @JoinColumn({ name: "branch_id" })
  branch!: Branch;

  @OneToMany(() => SupplierInvoice, (invoice) => invoice.supplier)
  invoices!: SupplierInvoice[];

  @OneToMany(() => SupplierPayment, (payment) => payment.supplier)
  payments!: SupplierPayment[];
}
