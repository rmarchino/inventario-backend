import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Branch } from "../../branches/entities/branch.entity";
import { Role } from "../../roles/entities/role.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "branch_id", nullable: true })
  branchId!: string;

  @Column({ name: "role_id", nullable: true })
  roleId!: string;

  @Column({ name: "full_name", length: 150 })
  full_name!: string;

  @Column({ unique: true, length: 100 })
  username!: string;

  @Column({ name: "password_hash", type: "text", select: false })
  password_hash!: string;

  @Column({ name: "pin_code", length: 10, nullable: true })
  pin_code!: string;

  @Column({ name: "is_active", type: "boolean", default: true })
  is_active!: boolean;

  @CreateDateColumn({ name: "created_at", type: "timestamptz" })
  created_at!: Date;

  // RELACIONES CON OTRAS ENTIDADES
  @ManyToOne(() => Branch, (branch) => branch.users)
  @JoinColumn({ name: "branch_id" })
  branch!: Branch;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: "role_id" })
  role!: Role;
}
