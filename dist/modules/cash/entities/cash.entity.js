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
exports.CashSession = exports.CashStatus = void 0;
const typeorm_1 = require("typeorm");
const branch_entity_1 = require("../../branches/entities/branch.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const sale_entity_1 = require("../../sales/entities/sale.entity");
var CashStatus;
(function (CashStatus) {
    CashStatus["OPEN"] = "OPEN";
    CashStatus["CLOSED"] = "CLOSED";
})(CashStatus || (exports.CashStatus = CashStatus = {}));
let CashSession = class CashSession {
};
exports.CashSession = CashSession;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], CashSession.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "branch_id" }),
    __metadata("design:type", String)
], CashSession.prototype, "branchId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "user_id" }),
    __metadata("design:type", String)
], CashSession.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "opening_amount", type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], CashSession.prototype, "openingAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "closing_amount",
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: true,
    }),
    __metadata("design:type", Number)
], CashSession.prototype, "closingAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "calculated_amount",
        type: "decimal",
        precision: 10,
        scale: 2,
        nullable: true,
    }),
    __metadata("design:type", Number)
], CashSession.prototype, "calculatedAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], CashSession.prototype, "difference", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "opened_at", type: "timestamptz" }),
    __metadata("design:type", Date)
], CashSession.prototype, "openedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "closed_at", type: "timestamptz", nullable: true }),
    __metadata("design:type", Date)
], CashSession.prototype, "closedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20, default: CashStatus.OPEN }),
    __metadata("design:type", String)
], CashSession.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], CashSession.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => branch_entity_1.Branch),
    (0, typeorm_1.JoinColumn)({ name: "branch_id" }),
    __metadata("design:type", branch_entity_1.Branch)
], CashSession.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", user_entity_1.User)
], CashSession.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sale_entity_1.Sale, (sale) => sale.cashSession),
    __metadata("design:type", Array)
], CashSession.prototype, "sales", void 0);
exports.CashSession = CashSession = __decorate([
    (0, typeorm_1.Entity)("cash_sessions")
], CashSession);
//# sourceMappingURL=cash.entity.js.map