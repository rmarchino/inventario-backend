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
exports.SupplierInvoice = exports.InvoiceStatus = void 0;
const typeorm_1 = require("typeorm");
const supplier_entity_1 = require("./supplier.entity");
const branch_entity_1 = require("../../branches/entities/branch.entity");
const supplier_invoice_item_entity_1 = require("./supplier-invoice-item.entity");
const supplier_payment_entity_1 = require("./supplier-payment.entity");
var InvoiceStatus;
(function (InvoiceStatus) {
    InvoiceStatus["PENDING"] = "PENDING";
    InvoiceStatus["PARTIAL"] = "PARTIAL";
    InvoiceStatus["PAID"] = "PAID";
    InvoiceStatus["CANCELED"] = "CANCELED";
})(InvoiceStatus || (exports.InvoiceStatus = InvoiceStatus = {}));
let SupplierInvoice = class SupplierInvoice {
};
exports.SupplierInvoice = SupplierInvoice;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], SupplierInvoice.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "supplier_id" }),
    __metadata("design:type", String)
], SupplierInvoice.prototype, "supplierId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "branch_id" }),
    __metadata("design:type", String)
], SupplierInvoice.prototype, "branchId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "invoice_number", length: 50, nullable: true }),
    __metadata("design:type", String)
], SupplierInvoice.prototype, "invoiceNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "invoice_date", type: "timestamptz", nullable: true }),
    __metadata("design:type", Date)
], SupplierInvoice.prototype, "invoiceDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], SupplierInvoice.prototype, "subtotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], SupplierInvoice.prototype, "igv", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], SupplierInvoice.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, default: InvoiceStatus.PENDING }),
    __metadata("design:type", String)
], SupplierInvoice.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: "timestamptz" }),
    __metadata("design:type", Date)
], SupplierInvoice.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => supplier_entity_1.Supplier, (supplier) => supplier.invoices),
    (0, typeorm_1.JoinColumn)({ name: "supplier_id" }),
    __metadata("design:type", supplier_entity_1.Supplier)
], SupplierInvoice.prototype, "supplier", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => branch_entity_1.Branch),
    (0, typeorm_1.JoinColumn)({ name: "branch_id" }),
    __metadata("design:type", branch_entity_1.Branch)
], SupplierInvoice.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => supplier_invoice_item_entity_1.SupplierInvoiceItem, (item) => item.invoice, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], SupplierInvoice.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => supplier_payment_entity_1.SupplierPayment, (payment) => payment.invoice),
    __metadata("design:type", Array)
], SupplierInvoice.prototype, "payments", void 0);
exports.SupplierInvoice = SupplierInvoice = __decorate([
    (0, typeorm_1.Entity)("supplier_invoices")
], SupplierInvoice);
//# sourceMappingURL=supplier-invoice.entity.js.map