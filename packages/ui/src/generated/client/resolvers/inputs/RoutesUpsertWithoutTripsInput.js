"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesUpsertWithoutTripsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesCreateWithoutTripsInput_1 = require("../inputs/RoutesCreateWithoutTripsInput");
const RoutesUpdateWithoutTripsInput_1 = require("../inputs/RoutesUpdateWithoutTripsInput");
let RoutesUpsertWithoutTripsInput = class RoutesUpsertWithoutTripsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesUpdateWithoutTripsInput_1.RoutesUpdateWithoutTripsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesUpdateWithoutTripsInput_1.RoutesUpdateWithoutTripsInput)
], RoutesUpsertWithoutTripsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesCreateWithoutTripsInput_1.RoutesCreateWithoutTripsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesCreateWithoutTripsInput_1.RoutesCreateWithoutTripsInput)
], RoutesUpsertWithoutTripsInput.prototype, "create", void 0);
RoutesUpsertWithoutTripsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesUpsertWithoutTripsInput", {
        isAbstract: true
    })
], RoutesUpsertWithoutTripsInput);
exports.RoutesUpsertWithoutTripsInput = RoutesUpsertWithoutTripsInput;
