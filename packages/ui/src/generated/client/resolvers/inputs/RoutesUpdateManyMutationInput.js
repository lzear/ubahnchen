"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let RoutesUpdateManyMutationInput = class RoutesUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoutesUpdateManyMutationInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoutesUpdateManyMutationInput.prototype, "route_name", void 0);
RoutesUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesUpdateManyMutationInput", {
        isAbstract: true
    })
], RoutesUpdateManyMutationInput);
exports.RoutesUpdateManyMutationInput = RoutesUpdateManyMutationInput;
