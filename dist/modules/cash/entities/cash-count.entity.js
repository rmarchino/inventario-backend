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
exports.CashCount = void 0;
const typeorm_1 = require("typeorm");
const cash_entity_1 = require("./cash.entity");
let CashCount = class CashCount {
};
exports.CashCount = CashCount;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], CashCount.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cash_session_id" }),
    __metadata("design:type", String)
], CashCount.prototype, "cashSessionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], CashCount.prototype, "bill_10", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], CashCount.prototype, "bill_20", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], CashCount.prototype, "bill_50", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], CashCount.prototype, "bill_100", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], CashCount.prototype, "bill_200", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "coin_total",
        type: "decimal",
        precision: 10,
        scale: 2,
        default: 0,
    }),
    __metadata("design:type", Number)
], CashCount.prototype, "coinTotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "counted_total", type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], CashCount.prototype, "countedTotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "expected_total", type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], CashCount.prototype, "expectedTotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], CashCount.prototype, "difference", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], CashCount.prototype, "observation", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: "timestamptz" }),
    __metadata("design:type", Date)
], CashCount.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cash_entity_1.CashSession),
    (0, typeorm_1.JoinColumn)({ name: "cash_session_id" }),
    __metadata("design:type", cash_entity_1.CashSession)
], CashCount.prototype, "cashSession", void 0);
exports.CashCount = CashCount = __decorate([
    (0, typeorm_1.Entity)("cash_counts")
], CashCount);
//# sourceMappingURL=cash-count.entity.js.map