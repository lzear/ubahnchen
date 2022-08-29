"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesAvgOrderByAggregateInput_1 = require("../inputs/Stop_timesAvgOrderByAggregateInput");
const Stop_timesCountOrderByAggregateInput_1 = require("../inputs/Stop_timesCountOrderByAggregateInput");
const Stop_timesMaxOrderByAggregateInput_1 = require("../inputs/Stop_timesMaxOrderByAggregateInput");
const Stop_timesMinOrderByAggregateInput_1 = require("../inputs/Stop_timesMinOrderByAggregateInput");
const Stop_timesSumOrderByAggregateInput_1 = require("../inputs/Stop_timesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Stop_timesOrderByWithAggregationInput = class Stop_timesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesOrderByWithAggregationInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesOrderByWithAggregationInput.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesOrderByWithAggregationInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesOrderByWithAggregationInput.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesOrderByWithAggregationInput.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesCountOrderByAggregateInput_1.Stop_timesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesCountOrderByAggregateInput_1.Stop_timesCountOrderByAggregateInput)
], Stop_timesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesAvgOrderByAggregateInput_1.Stop_timesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesAvgOrderByAggregateInput_1.Stop_timesAvgOrderByAggregateInput)
], Stop_timesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesMaxOrderByAggregateInput_1.Stop_timesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesMaxOrderByAggregateInput_1.Stop_timesMaxOrderByAggregateInput)
], Stop_timesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesMinOrderByAggregateInput_1.Stop_timesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesMinOrderByAggregateInput_1.Stop_timesMinOrderByAggregateInput)
], Stop_timesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesSumOrderByAggregateInput_1.Stop_timesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesSumOrderByAggregateInput_1.Stop_timesSumOrderByAggregateInput)
], Stop_timesOrderByWithAggregationInput.prototype, "_sum", void 0);
Stop_timesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesOrderByWithAggregationInput", {
        isAbstract: true
    })
], Stop_timesOrderByWithAggregationInput);
exports.Stop_timesOrderByWithAggregationInput = Stop_timesOrderByWithAggregationInput;
