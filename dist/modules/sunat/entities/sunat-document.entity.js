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
exports.SunatDocument = void 0;
const typeorm_1 = require("typeorm");
const sale_entity_1 = require("../../sales/entities/sale.entity");
let SunatDocument = class SunatDocument {
};
exports.SunatDocument = SunatDocument;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], SunatDocument.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "sale_id" }),
    __metadata("design:type", String)
], SunatDocument.prototype, "saleId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "sunat_status", length: 20, default: "PENDING" }),
    __metadata("design:type", String)
], SunatDocument.prototype, "sunatStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "xml_filename", length: 100, nullable: true }),
    __metadata("design:type", String)
], SunatDocument.prototype, "xmlFilename", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cdr_filename", length: 100, nullable: true }),
    __metadata("design:type", String)
], SunatDocument.prototype, "cdrFilename", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "digest_value", type: "text", nullable: true }),
    __metadata("design:type", String)
], SunatDocument.prototype, "digestValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "sunat_description", type: "text", nullable: true }),
    __metadata("design:type", String)
], SunatDocument.prototype, "sunatDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "sunat_code", length: 10, nullable: true }),
    __metadata("design:type", String)
], SunatDocument.prototype, "sunatCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "sent_at", type: "timestamptz", nullable: true }),
    __metadata("design:type", Date)
], SunatDocument.prototype, "sentAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "response_at", type: "timestamptz", nullable: true }),
    __metadata("design:type", Date)
], SunatDocument.prototype, "responseAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: "timestamptz" }),
    __metadata("design:type", Date)
], SunatDocument.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => sale_entity_1.Sale, (sale) => sale.sunatDocument),
    (0, typeorm_1.JoinColumn)({ name: "sale_id" }),
    __metadata("design:type", sale_entity_1.Sale)
], SunatDocument.prototype, "sale", void 0);
exports.SunatDocument = SunatDocument = __decorate([
    (0, typeorm_1.Entity)("sunat_documents")
], SunatDocument);
//# sourceMappingURL=sunat-document.entity.js.map