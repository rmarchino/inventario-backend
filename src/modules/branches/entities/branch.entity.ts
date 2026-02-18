import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Product } from "../../products/entities/product.entity";
import { Sale } from "../../sales/entities/sale.entity";

@Entity("branches")
export class Branch {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ type: "varchar", length: 150 })
  name?: string;

  @Column("text", { nullable: true })
  address?: string;

  @Column({ type: "varchar", length: 20, unique: true, nullable: true })
  code?: string;

  @Column({ type: "boolean", default: true, name: "is_active" })
  is_active?: boolean;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  created_at?: Date;

  // RELACIONES CON OTRAS ENTIDADES
  @OneToMany(() => User, (user) => user.branch)
  users?: User[];

  @ManyToMany(() => Product, (product) => product.branch)
  products?: Product[];

  @OneToMany(() => Sale, (sale) => sale.branch)
  sales?: Sale[];
}
