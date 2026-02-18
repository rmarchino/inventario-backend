import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Branch } from "../../branches/entities/branch.entity";

@Entity("attendances")
export class Attendance {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ name: "user_id" })
  userId!: string;

  @Column({ name: "branch_id" })
  branchId!: string;

  @Column({ length: 20, nullable: true })
  method?: string;

  @CreateDateColumn({ name: "check_in", type: "timestamptz" })
  checkIn!: Date;

  @Column({ name: "check_out", type: "timestamptz", nullable: true })
  checkOut!: Date;

  @Column({
    name: "work_hours",
    type: "decimal",
    precision: 5,
    scale: 2,
    nullable: true,
  })
  workHours!: number;

  // RELACIONES CON OTRAS ENTIDADES
  // users
  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user!: User;

  // branches
  @ManyToOne(() => Branch)
  @JoinColumn({ name: "branch_id" })
  branch!: Branch;
}
