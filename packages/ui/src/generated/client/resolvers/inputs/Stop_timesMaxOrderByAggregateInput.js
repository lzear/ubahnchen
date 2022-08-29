"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Stop_timesMaxOrderByAggregateInput = class Stop_timesMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesMaxOrderByAggregateInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesMaxOrderByAggregateInput.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesMaxOrderByAggregateInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesMaxOrderByAggregateInput.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesMaxOrderByAggregateInput.prototype, "stop_idx", void 0);
Stop_timesMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesMaxOrderByAggregateInput", {
        isAbstract: true
    })
], Stop_timesMaxOrderByAggregateInput);
exports.Stop_timesMaxOrderByAggregateInput = Stop_timesMaxOrderByAggregateInput;
