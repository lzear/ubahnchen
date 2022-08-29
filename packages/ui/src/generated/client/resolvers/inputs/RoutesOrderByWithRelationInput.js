"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsOrderByRelationAggregateInput_1 = require("../inputs/TripsOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RoutesOrderByWithRelationInput = class RoutesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesOrderByWithRelationInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesOrderByWithRelationInput.prototype, "route_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsOrderByRelationAggregateInput_1.TripsOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsOrderByRelationAggregateInput_1.TripsOrderByRelationAggregateInput)
], RoutesOrderByWithRelationInput.prototype, "trips", void 0);
RoutesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesOrderByWithRelationInput", {
        isAbstract: true
    })
], RoutesOrderByWithRelationInput);
exports.RoutesOrderByWithRelationInput = RoutesOrderByWithRelationInput;
