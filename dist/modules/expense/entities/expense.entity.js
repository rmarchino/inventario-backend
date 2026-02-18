"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expense = void 0;
const typeorm_1 = require("typeorm");
const branch_entity_1 = require("../../branches/entities/branch.entity");
const expense_category_entity_1 = require("./expense-category.entity");
const cash_entity_1 = require("../../cash/entities/cash.entity");
let Expense = class Expense {
};
exports.Expense = Expense;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Expense.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "branch_id" }),
    __metadata("design:type", String)
], Expense.prototype, "branchId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "category_id" }),
    __metadata("design:type", String)
], Expense.prototype, "categoryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cash_session_id" }),
    __metadata("design:type", String)
], Expense.prototype, "cashSessionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Expense.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "payment_method", length: 20, default: "EFECTIVO" }),
    __metadata("design:type", String)
], Expense.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: "timestamptz" }),
    __metadata("design:type", Date)
], Expense.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => branch_entity_1.Branch),
    (0, typeorm_1.JoinColumn)({ name: "branch_id" }),
    __metadata("design:type", branch_entity_1.Branch)
], Expense.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => expense_category_entity_1.ExpenseCategory, (category) => category.expenses),
    (0, typeorm_1.JoinColumn)({ name: "category_id" }),
    __metadata("design:type", expense_category_entity_1.ExpenseCategory)
], Expense.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cash_entity_1.CashSession),
    (0, typeorm_1.JoinColumn)({ name: "cash_session_id" }),
    __metadata("design:type", cash_entity_1.CashSession)
], Expense.prototype, "cashSession", void 0);
exports.Expense = Expense = __decorate([
    (0, typeorm_1.Entity)("expenses")
], Expense);
//# sourceMappingURL=expense.entity.js.map