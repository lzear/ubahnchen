"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesOrderByWithRelationInput_1 = require("../inputs/RoutesOrderByWithRelationInput");
const Stop_timesOrderByRelationAggregateInput_1 = require("../inputs/Stop_timesOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TripsOrderByWithRelationInput = class TripsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsOrderByWithRelationInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsOrderByWithRelationInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsOrderByWithRelationInput.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsOrderByWithRelationInput.prototype, "trip_headsign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsOrderByWithRelationInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsOrderByWithRelationInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesOrderByWithRelationInput_1.RoutesOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesOrderByWithRelationInput_1.RoutesOrderByWithRelationInput)
], TripsOrderByWithRelationInput.prototype, "routes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesOrderByRelationAggregateInput_1.Stop_timesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesOrderByRelationAggregateInput_1.Stop_timesOrderByRelationAggregateInput)
], TripsOrderByWithRelationInput.prototype, "stop_times", void 0);
TripsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsOrderByWithRelationInput", {
        isAbstract: true
    })
], TripsOrderByWithRelationInput);
exports.TripsOrderByWithRelationInput = TripsOrderByWithRelationInput;
