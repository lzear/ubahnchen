"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesCreateWithoutTripsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoutesCreateWithoutTripsInput = class RoutesCreateWithoutTripsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoutesCreateWithoutTripsInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoutesCreateWithoutTripsInput.prototype, "route_name", void 0);
RoutesCreateWithoutTripsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesCreateWithoutTripsInput", {
        isAbstract: true
    })
], RoutesCreateWithoutTripsInput);
exports.RoutesCreateWithoutTripsInput = RoutesCreateWithoutTripsInput;
