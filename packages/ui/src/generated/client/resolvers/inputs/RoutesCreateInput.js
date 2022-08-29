"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsCreateNestedManyWithoutRoutesInput_1 = require("../inputs/TripsCreateNestedManyWithoutRoutesInput");
let RoutesCreateInput = class RoutesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoutesCreateInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoutesCreateInput.prototype, "route_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCreateNestedManyWithoutRoutesInput_1.TripsCreateNestedManyWithoutRoutesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsCreateNestedManyWithoutRoutesInput_1.TripsCreateNestedManyWithoutRoutesInput)
], RoutesCreateInput.prototype, "trips", void 0);
RoutesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesCreateInput", {
        isAbstract: true
    })
], RoutesCreateInput);
exports.RoutesCreateInput = RoutesCreateInput;
