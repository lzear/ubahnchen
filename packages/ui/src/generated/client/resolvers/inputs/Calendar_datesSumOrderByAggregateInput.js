"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Calendar_datesSumOrderByAggregateInput = class Calendar_datesSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesSumOrderByAggregateInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesSumOrderByAggregateInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesSumOrderByAggregateInput.prototype, "is_removing", void 0);
Calendar_datesSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Calendar_datesSumOrderByAggregateInput", {
        isAbstract: true
    })
], Calendar_datesSumOrderByAggregateInput);
exports.Calendar_datesSumOrderByAggregateInput = Calendar_datesSumOrderByAggregateInput;
