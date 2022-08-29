"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TripsAvgOrderByAggregateInput = class TripsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsAvgOrderByAggregateInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsAvgOrderByAggregateInput.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsAvgOrderByAggregateInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsAvgOrderByAggregateInput.prototype, "end_time", void 0);
TripsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], TripsAvgOrderByAggregateInput);
exports.TripsAvgOrderByAggregateInput = TripsAvgOrderByAggregateInput;
