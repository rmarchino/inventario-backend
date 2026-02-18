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
exports.SupplierPayment = void 0;
const typeorm_1 = require("typeorm");
const supplier_entity_1 = require("./supplier.entity");
const supplier_invoice_entity_1 = require("./supplier-invoice.entity");
const cash_entity_1 = require("../../cash/entities/cash.entity");
let SupplierPayment = class SupplierPayment {
};
exports.SupplierPayment = SupplierPayment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], SupplierPayment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "supplier_id" }),
    __metadata("design:type", String)
], SupplierPayment.prototype, "supplierId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "invoice_id", nullable: true }),
    __metadata("design:type", String)
], SupplierPayment.prototype, "invoiceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cash_session_id" }),
    __metadata("design:type", String)
], SupplierPayment.prototype, "cashSessionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "payment_method", length: 20 }),
    __metadata("design:type", String)
], SupplierPayment.prototype, "paymentMethod", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], SupplierPayment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], SupplierPayment.prototype, "reference", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: "timestamptz" }),
    __metadata("design:type", Date)
], SupplierPayment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => supplier_entity_1.Supplier, (supplier) => supplier.payments),
    (0, typeorm_1.JoinColumn)({ name: "supplier_id" }),
    __metadata("design:type", supplier_entity_1.Supplier)
], SupplierPayment.prototype, "supplier", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => supplier_invoice_entity_1.SupplierInvoice, (invoice) => invoice.payments),
    (0, typeorm_1.JoinColumn)({ name: "invoice_id" }),
    __metadata("design:type", supplier_invoice_entity_1.SupplierInvoice)
], SupplierPayment.prototype, "invoice", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cash_entity_1.CashSession),
    (0, typeorm_1.JoinColumn)({ name: "cash_session_id" }),
    __metadata("design:type", cash_entity_1.CashSession)
], SupplierPayment.prototype, "cashSession", void 0);
exports.SupplierPayment = SupplierPayment = __decorate([
    (0, typeorm_1.Entity)("supplier_payments")
], SupplierPayment);
//# sourceMappingURL=supplier-payment.entity.js.map