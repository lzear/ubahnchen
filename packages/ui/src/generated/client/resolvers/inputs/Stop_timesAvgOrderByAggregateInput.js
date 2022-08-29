"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Stop_timesAvgOrderByAggregateInput = class Stop_timesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesAvgOrderByAggregateInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesAvgOrderByAggregateInput.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesAvgOrderByAggregateInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesAvgOrderByAggregateInput.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesAvgOrderByAggregateInput.prototype, "stop_idx", void 0);
Stop_timesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Stop_timesAvgOrderByAggregateInput);
exports.Stop_timesAvgOrderByAggregateInput = Stop_timesAvgOrderByAggregateInput;
