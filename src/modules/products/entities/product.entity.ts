import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Branch } from "../../branches/entities/branch.entity";
import { Category } from "../../categories/entities/category.entity";

export enum SaleType {
  PESO = "PESO",
  UNIDAD = "UNIDAD",
}

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "branch_id" })
  branchId?: string;

  @Column({ name: "category_id", nullable: true })
  categoryId?: string;

  @Column({ length: 150 })
  name?: string;

  @Column({ length: 50, unique: true, nullable: true })
  sku?: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  // Precios
  @Column({
    name: "price_per_kg",
    type: "decimal",
    precision: 10,
    scale: 2,
    default: 0,
  })
  price_perKg?: number;

  @Column({
    name: "price_unit",
    type: "decimal",
    precision: 10,
    scale: 2,
    default: 0,
  })
  price_unit?: number;

  @Column({ name: "sale_type", type: "varchar", length: 20 })
  saleType?: SaleType;

  // Stock con 3 decimales
  @Column({ type: "decimal", precision: 10, scale: 3, default: 0 })
  stock?: number;

  @Column({
    name: "min_stock",
    type: "decimal",
    precision: 10,
    scale: 3,
    default: 0,
  })
  minStock?: number;

  @Column({ name: "image_url", type: "text", nullable: true })
  imageUrl?: string;

  @Column({ name: "is_active", default: true })
  isActive?: boolean;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt?: Date;

  // RELACIONES CON OTRAS ENTIDADES
  @ManyToOne(() => Branch, (branch) => branch.products)
  @JoinColumn({ name: "branch_id" })
  branch?: Branch;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: "category_id" })
  category?: Category;
}
