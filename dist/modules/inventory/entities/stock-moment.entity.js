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
exports.StockMoment = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../../products/entities/product.entity");
const branch_entity_1 = require("../../branches/entities/branch.entity");
const user_entity_1 = require("../../users/entities/user.entity");
let StockMoment = class StockMoment {
};
exports.StockMoment = StockMoment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], StockMoment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "product_id" }),
    __metadata("design:type", String)
], StockMoment.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "branch_id" }),
    __metadata("design:type", String)
], StockMoment.prototype, "branchId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "user_id", nullable: true }),
    __metadata("design:type", String)
], StockMoment.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "movement_type", length: 20 }),
    __metadata("design:type", String)
], StockMoment.prototype, "movementType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "reference_id", type: "uuid", nullable: true }),
    __metadata("design:type", String)
], StockMoment.prototype, "referenceId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], StockMoment.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at", type: "timestamptz" }),
    __metadata("design:type", Date)
], StockMoment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entity_1.Product),
    (0, typeorm_1.JoinColumn)({ name: "product_id" }),
    __metadata("design:type", product_entity_1.Product)
], StockMoment.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => branch_entity_1.Branch),
    (0, typeorm_1.JoinColumn)({ name: "branch_id" }),
    __metadata("design:type", branch_entity_1.Branch)
], StockMoment.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", user_entity_1.User)
], StockMoment.prototype, "user", void 0);
exports.StockMoment = StockMoment = __decorate([
    (0, typeorm_1.Entity)("stock_moments")
], StockMoment);
//# sourceMappingURL=stock-moment.entity.js.map