"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Calendar_datesAvgOrderByAggregateInput = class Calendar_datesAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesAvgOrderByAggregateInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesAvgOrderByAggregateInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesAvgOrderByAggregateInput.prototype, "is_removing", void 0);
Calendar_datesAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Calendar_datesAvgOrderByAggregateInput", {
        isAbstract: true
    })
], Calendar_datesAvgOrderByAggregateInput);
exports.Calendar_datesAvgOrderByAggregateInput = Calendar_datesAvgOrderByAggregateInput;
