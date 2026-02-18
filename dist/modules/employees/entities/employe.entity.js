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
exports.Employee = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const branch_entity_1 = require("../../branches/entities/branch.entity");
const payroll_payment_entity_1 = require("../../payments/entities/payroll-payment.entity");
let Employee = class Employee {
};
exports.Employee = Employee;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Employee.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "user_id", nullable: true }),
    __metadata("design:type", Object)
], Employee.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "branch_id", nullable: true }),
    __metadata("design:type", String)
], Employee.prototype, "branchId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Employee.prototype, "salary", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "payment_frequency", length: 20, default: "MONTHLY" }),
    __metadata("design:type", String)
], Employee.prototype, "paymentFrequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "hire_date", type: "date", nullable: true }),
    __metadata("design:type", Date)
], Employee.prototype, "hireDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, default: "ACTIVE" }),
    __metadata("design:type", String)
], Employee.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", user_entity_1.User)
], Employee.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => branch_entity_1.Branch),
    (0, typeorm_1.JoinColumn)({ name: "branch_id" }),
    __metadata("design:type", branch_entity_1.Branch)
], Employee.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => payroll_payment_entity_1.PayrolPayment, (payment) => payment.employee),
    __metadata("design:type", Array)
], Employee.prototype, "payments", void 0);
exports.Employee = Employee = __decorate([
    (0, typeorm_1.Entity)("employees")
], Employee);
//# sourceMappingURL=employe.entity.js.map