import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Sale } from "../../sales/entities/sale.entity";

@Entity("customers")
export class Customer {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "document_type", length: 20, default: "DNI" })
  documentType!: string;

  @Column({ name: "document_number", length: 20, nullable: true })
  documentNumber!: string;

  @Column({ name: "full_name", length: 200, nullable: true })
  fullName!: string;

  @Column({ name: "business_name", length: 200, nullable: true })
  businessName!: string;

  @Column({ length: 150, nullable: true })
  email!: string;

  @Column({ length: 20, nullable: true })
  phone!: string;

  @Column({ type: "text", nullable: true })
  address!: string;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

    @OneToMany(() => Sale, (sale) => sale.customer)
  sales!: Sale[];
}
