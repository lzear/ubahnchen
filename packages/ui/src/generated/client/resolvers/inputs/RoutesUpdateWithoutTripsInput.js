"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesUpdateWithoutTripsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let RoutesUpdateWithoutTripsInput = class RoutesUpdateWithoutTripsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoutesUpdateWithoutTripsInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], RoutesUpdateWithoutTripsInput.prototype, "route_name", void 0);
RoutesUpdateWithoutTripsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesUpdateWithoutTripsInput", {
        isAbstract: true
    })
], RoutesUpdateWithoutTripsInput);
exports.RoutesUpdateWithoutTripsInput = RoutesUpdateWithoutTripsInput;
