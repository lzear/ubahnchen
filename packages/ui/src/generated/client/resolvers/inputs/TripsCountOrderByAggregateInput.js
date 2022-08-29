"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TripsCountOrderByAggregateInput = class TripsCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsCountOrderByAggregateInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsCountOrderByAggregateInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsCountOrderByAggregateInput.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsCountOrderByAggregateInput.prototype, "trip_headsign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsCountOrderByAggregateInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsCountOrderByAggregateInput.prototype, "end_time", void 0);
TripsCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsCountOrderByAggregateInput", {
        isAbstract: true
    })
], TripsCountOrderByAggregateInput);
exports.TripsCountOrderByAggregateInput = TripsCountOrderByAggregateInput;
