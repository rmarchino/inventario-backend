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
exports.Sale = void 0;
const typeorm_1 = require("typeorm");
const branch_entity_1 = require("../../branches/entities/branch.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const cash_entity_1 = require("../../cash/entities/cash.entity");
const customer_entity_1 = require("../../customers/entities/customer.entity");
const sale_item_entity_1 = require("./sale-item.entity");
const sunat_document_entity_1 = require("../../sunat/entities/sunat-document.entity");
let Sale = class Sale {
};
exports.Sale = Sale;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Sale.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "branch_id" }),
    __metadata("design:type", String)
], Sale.prototype, "branchId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "seller_id", nullable: true }),
    __metadata("design:type", String)
], Sale.prototype, "sellerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cash_session_id" }),
    __metadata("design:type", String)
], Sale.prototype, "cashSessionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "customer_id", nullable: true }),
    __metadata("design:type", String)
], Sale.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "payment_method", length: 20 }),
    __metadata("design:type", String)
], Sale.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "receipt_type", length: 20 }),
    __metadata("design:type", String)
], Sale.prototype, "receiptType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "receipt_series", length: 10, nullable: true }),
    __metadata("design:type", String)
], Sale.prototype, "receiptSeries", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "receipt_number", length: 20, nullable: true }),
    __metadata("design:type", String)
], Sale.prototype, "receiptNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Sale.prototype, "subtotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Sale.prototype, "igv", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Sale.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "cash_amount",
        type: "decimal",
        precision: 10,
        scale: 2,
        default: 0,
    }),
    __metadata("design:type", Number)
], Sale.prototype, "cashAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: "digital_amount",
        type: "decimal",
        precision: 10,
        scale: 2,
        default: 0,
    }),
    __metadata("design:type", Number)
], Sale.prototype, "digitalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, default: "COMPLETED" }),
    __metadata("design:type", String)
], Sale.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: "timestamptz" }),
    __metadata("design:type", Date)
], Sale.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => branch_entity_1.Branch),
    (0, typeorm_1.JoinColumn)({ name: "branch_id" }),
    __metadata("design:type", branch_entity_1.Branch)
], Sale.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: "seller_id" }),
    __metadata("design:type", user_entity_1.User)
], Sale.prototype, "seller", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cash_entity_1.CashSession, (cashSession) => cashSession.sales),
    (0, typeorm_1.JoinColumn)({ name: "cash_session_id" }),
    __metadata("design:type", cash_entity_1.CashSession)
], Sale.prototype, "cashSession", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => customer_entity_1.Customer, (customer) => customer.sales),
    (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
    __metadata("design:type", customer_entity_1.Customer)
], Sale.prototype, "customer", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sale_item_entity_1.SaleItem, (item) => item.sale, { cascade: true }),
    __metadata("design:type", Array)
], Sale.prototype, "saleItems", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => sunat_document_entity_1.SunatDocument, (doc) => doc.sale),
    __metadata("design:type", sunat_document_entity_1.SunatDocument)
], Sale.prototype, "sunatDocument", void 0);
exports.Sale = Sale = __decorate([
    (0, typeorm_1.Entity)("Sales")
], Sale);
//# sourceMappingURL=sale.entity.js.map