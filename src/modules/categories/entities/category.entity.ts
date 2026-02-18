import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Branch } from "../../branches/entities/branch.entity";
import { Product } from "../../products/entities/product.entity";

@Entity("categories")
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ name: "branch_id", nullable: true })
  branchId?: string;

  @Column({ type: "varchar", length: 100 })
  name?: string;

  @Column({ name: "is_active", default: true })
  is_active?: boolean;

  // RELACIONES CON OTRAS ENTIDADES
  @ManyToOne(() => Branch)
  @JoinColumn({ name: "branch_id" })
  branch?: Branch;

  @OneToMany(() => Product, (product) => product.category)
  products?: Product[];
}
