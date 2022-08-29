"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsAvgOrderByAggregateInput_1 = require("../inputs/TripsAvgOrderByAggregateInput");
const TripsCountOrderByAggregateInput_1 = require("../inputs/TripsCountOrderByAggregateInput");
const TripsMaxOrderByAggregateInput_1 = require("../inputs/TripsMaxOrderByAggregateInput");
const TripsMinOrderByAggregateInput_1 = require("../inputs/TripsMinOrderByAggregateInput");
const TripsSumOrderByAggregateInput_1 = require("../inputs/TripsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TripsOrderByWithAggregationInput = class TripsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsOrderByWithAggregationInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsOrderByWithAggregationInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsOrderByWithAggregationInput.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsOrderByWithAggregationInput.prototype, "trip_headsign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsOrderByWithAggregationInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsOrderByWithAggregationInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCountOrderByAggregateInput_1.TripsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsCountOrderByAggregateInput_1.TripsCountOrderByAggregateInput)
], TripsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsAvgOrderByAggregateInput_1.TripsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsAvgOrderByAggregateInput_1.TripsAvgOrderByAggregateInput)
], TripsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsMaxOrderByAggregateInput_1.TripsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsMaxOrderByAggregateInput_1.TripsMaxOrderByAggregateInput)
], TripsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsMinOrderByAggregateInput_1.TripsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsMinOrderByAggregateInput_1.TripsMinOrderByAggregateInput)
], TripsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsSumOrderByAggregateInput_1.TripsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsSumOrderByAggregateInput_1.TripsSumOrderByAggregateInput)
], TripsOrderByWithAggregationInput.prototype, "_sum", void 0);
TripsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsOrderByWithAggregationInput", {
        isAbstract: true
    })
], TripsOrderByWithAggregationInput);
exports.TripsOrderByWithAggregationInput = TripsOrderByWithAggregationInput;
