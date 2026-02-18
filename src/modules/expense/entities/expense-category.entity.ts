import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Expense } from "./expense.entity";

@Entity("expense_categories")
export class ExpenseCategory {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @OneToMany(() => Expense, (expense) => expense.category)
  expenses!: Expense[];
}
