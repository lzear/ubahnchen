"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Stop_timesMinOrderByAggregateInput = class Stop_timesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesMinOrderByAggregateInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesMinOrderByAggregateInput.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesMinOrderByAggregateInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesMinOrderByAggregateInput.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesMinOrderByAggregateInput.prototype, "stop_idx", void 0);
Stop_timesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesMinOrderByAggregateInput", {
        isAbstract: true
    })
], Stop_timesMinOrderByAggregateInput);
exports.Stop_timesMinOrderByAggregateInput = Stop_timesMinOrderByAggregateInput;
