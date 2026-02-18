import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { SupplierInvoice } from "./supplier-invoice.entity";
import { Product } from "../../products/entities/product.entity";

@Entity("supplier_invoice_item")
export class SupplierInvoiceItem {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "invoice_id" })
  invoiceId!: string;

  @Column({ name: "product_id" })
  productId!: string;

  @Column({ type: "decimal", precision: 10, scale: 3 })
  quantity!: number;

  @Column({ name: "unit_cost", type: "decimal", precision: 10, scale: 2 })
  unitCost!: number;

  @Column({ name: "total_cost", type: "decimal", precision: 10, scale: 2 })
  totalCost!: number;

  // RELACIONES CON OTRAS ENTIDADES
  @ManyToOne(() => SupplierInvoice, (invoice) => invoice.items)
  @JoinColumn({ name: "invoice_id" })
  invoice!: SupplierInvoice;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product!: Product;
}
