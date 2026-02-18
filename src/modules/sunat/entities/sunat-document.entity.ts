import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Sale } from "../../sales/entities/sale.entity";

@Entity("sunat_documents")
export class SunatDocument {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "sale_id" })
  saleId!: string;

  @Column({ name: "sunat_status", length: 20, default: "PENDING" })
  sunatStatus!: string;

  @Column({ name: "xml_filename", length: 100, nullable: true })
  xmlFilename!: string;

  @Column({ name: "cdr_filename", length: 100, nullable: true })
  cdrFilename!: string;

  @Column({ name: "digest_value", type: "text", nullable: true })
  digestValue!: string;

  @Column({ name: "sunat_description", type: "text", nullable: true })
  sunatDescription!: string;

  @Column({ name: "sunat_code", length: 10, nullable: true })
  sunatCode!: string;

  @Column({ name: "sent_at", type: "timestamptz", nullable: true })
  sentAt!: Date;

  @Column({ name: "response_at", type: "timestamptz", nullable: true })
  responseAt!: Date;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  createdAt!: Date;

  // RELACIONES CON OTRAS ENTIDADES
  @OneToOne(() => Sale, (sale) => sale.sunatDocument)
  @JoinColumn({ name: "sale_id" })
  sale!: Sale;
}
