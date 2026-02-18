import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity("roles")
export class Role {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "varchar", length: 50, unique: true })
  name!: string;

  @Column("text", { nullable: true })
  description!: string;

  // RELACIONES CON OTRAS ENTIDADES
  // users
  @OneToMany(() => User, (user) => user.role)
  users?: User[];
}
