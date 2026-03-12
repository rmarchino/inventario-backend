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

  @ManyToOne(() => Sale, (sale) => sale.saleItems, { onDelete: "CASCADE" })
  @JoinColumn({ name: "sale_id" })
  sale!: Sale;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product!: Product;

  @Column("decimal", { precision: 10, scale: 3 })
  quantity!: number;

  @Column("decimal", { precision: 10, scale: 2 })
  unitPrice!: number;

  @Column("decimal", { precision: 10, scale: 2 })
  totalPrice!: number;
}
