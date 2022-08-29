"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntFieldUpdateOperationsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let IntFieldUpdateOperationsInput = class IntFieldUpdateOperationsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IntFieldUpdateOperationsInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IntFieldUpdateOperationsInput.prototype, "increment", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IntFieldUpdateOperationsInput.prototype, "decrement", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IntFieldUpdateOperationsInput.prototype, "multiply", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IntFieldUpdateOperationsInput.prototype, "divide", void 0);
IntFieldUpdateOperationsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("IntFieldUpdateOperationsInput", {
        isAbstract: true
    })
], IntFieldUpdateOperationsInput);
exports.IntFieldUpdateOperationsInput = IntFieldUpdateOperationsInput;
