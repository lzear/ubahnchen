"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
const TripsUpdateManyWithoutRoutesNestedInput_1 = require("../inputs/TripsUpdateManyWithoutRoutesNestedInput");
let RoutesUpdateInput = class RoutesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoutesUpdateInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoutesUpdateInput.prototype, "route_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsUpdateManyWithoutRoutesNestedInput_1.TripsUpdateManyWithoutRoutesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsUpdateManyWithoutRoutesNestedInput_1.TripsUpdateManyWithoutRoutesNestedInput)
], RoutesUpdateInput.prototype, "trips", void 0);
RoutesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesUpdateInput", {
        isAbstract: true
    })
], RoutesUpdateInput);
exports.RoutesUpdateInput = RoutesUpdateInput;
