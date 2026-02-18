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
exports.Supplier = void 0;
const typeorm_1 = require("typeorm");
const branch_entity_1 = require("../../branches/entities/branch.entity");
const supplier_invoice_entity_1 = require("./supplier-invoice.entity");
const supplier_payment_entity_1 = require("./supplier-payment.entity");
let Supplier = class Supplier {
};
exports.Supplier = Supplier;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Supplier.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "branch_id", nullable: true }),
    __metadata("design:type", String)
], Supplier.prototype, "branchId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "document_type", length: 20, default: "RUC" }),
    __metadata("design:type", String)
], Supplier.prototype, "documentType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "document_number", length: 20, nullable: true }),
    __metadata("design:type", String)
], Supplier.prototype, "documentNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "business_name", length: 200 }),
    __metadata("design:type", String)
], Supplier.prototype, "businessName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "contact_name", length: 150, nullable: true }),
    __metadata("design:type", String)
], Supplier.prototype, "contactName", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 150, nullable: true }),
    __metadata("design:type", String)
], Supplier.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Supplier.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Supplier.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "bank_account", type: "text", nullable: true }),
    __metadata("design:type", String)
], Supplier.prototype, "bankAccount", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "is_active", default: true }),
    __metadata("design:type", Boolean)
], Supplier.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: "timestamptz" }),
    __metadata("design:type", Date)
], Supplier.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => branch_entity_1.Branch),
    (0, typeorm_1.JoinColumn)({ name: "branch_id" }),
    __metadata("design:type", branch_entity_1.Branch)
], Supplier.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => supplier_invoice_entity_1.SupplierInvoice, (invoice) => invoice.supplier),
    __metadata("design:type", Array)
], Supplier.prototype, "invoices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => supplier_payment_entity_1.SupplierPayment, (payment) => payment.supplier),
    __metadata("design:type", Array)
], Supplier.prototype, "payments", void 0);
exports.Supplier = Supplier = __decorate([
    (0, typeorm_1.Entity)("suppliers")
], Supplier);
//# sourceMappingURL=supplier.entity.js.map