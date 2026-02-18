import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Product } from "../../products/entities/product.entity";
import { Branch } from "../../branches/entities/branch.entity";
import { User } from "../../users/entities/user.entity";

@Entity("stock_moments")
export class StockMoment {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ name: "product_id" })
  productId?: string;

  @Column({ name: "branch_id" })
  branchId?: string;

  @Column({ name: "user_id", nullable: true })
  userId?: string;

  @Column({ name: "movement_type", length: 20 })
  movementType?: string;

  @Column({ name: "reference_id", type: "uuid", nullable: true })
  referenceId?: string;

  @Column({ type: "text", nullable: true })
  note?: string;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt?: Date;

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product?: Product;

  @ManyToOne(() => Branch)
  @JoinColumn({ name: "branch_id" })
  branch?: Branch;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user?: User;
}
