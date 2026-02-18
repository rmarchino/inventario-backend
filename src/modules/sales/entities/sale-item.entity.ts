import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Sale } from "./sale.entity";
import { Product } from "../../products/entities/product.entity";

@Entity("sale_items")
export class SaleItem {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "sale_id" })
  saleId!: string;

  @Column({ name: "product_id" })
  productId!: string;

  @Column({ type: "decimal", precision: 10, scale: 3, nullable: true })
  quantity!: number;

  @Column({ name: "unit_price", type: "decimal", precision: 10, scale: 2 })
  unitPrice!: number;

  @Column({ name: "total_price", type: "decimal", precision: 10, scale: 2 })
  totalPrice!: number;

  @ManyToOne(() => Sale, (sale) => sale.saleItems, { onDelete: "CASCADE" })
  sale!: Sale;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product!: Product;
}
