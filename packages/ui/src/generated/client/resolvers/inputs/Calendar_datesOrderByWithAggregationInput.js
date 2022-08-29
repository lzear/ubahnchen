"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesAvgOrderByAggregateInput_1 = require("../inputs/Calendar_datesAvgOrderByAggregateInput");
const Calendar_datesCountOrderByAggregateInput_1 = require("../inputs/Calendar_datesCountOrderByAggregateInput");
const Calendar_datesMaxOrderByAggregateInput_1 = require("../inputs/Calendar_datesMaxOrderByAggregateInput");
const Calendar_datesMinOrderByAggregateInput_1 = require("../inputs/Calendar_datesMinOrderByAggregateInput");
const Calendar_datesSumOrderByAggregateInput_1 = require("../inputs/Calendar_datesSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Calendar_datesOrderByWithAggregationInput = class Calendar_datesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesOrderByWithAggregationInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesOrderByWithAggregationInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesOrderByWithAggregationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesOrderByWithAggregationInput.prototype, "is_removing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesCountOrderByAggregateInput_1.Calendar_datesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesCountOrderByAggregateInput_1.Calendar_datesCountOrderByAggregateInput)
], Calendar_datesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesAvgOrderByAggregateInput_1.Calendar_datesAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesAvgOrderByAggregateInput_1.Calendar_datesAvgOrderByAggregateInput)
], Calendar_datesOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesMaxOrderByAggregateInput_1.Calendar_datesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesMaxOrderByAggregateInput_1.Calendar_datesMaxOrderByAggregateInput)
], Calendar_datesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesMinOrderByAggregateInput_1.Calendar_datesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesMinOrderByAggregateInput_1.Calendar_datesMinOrderByAggregateInput)
], Calendar_datesOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesSumOrderByAggregateInput_1.Calendar_datesSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesSumOrderByAggregateInput_1.Calendar_datesSumOrderByAggregateInput)
], Calendar_datesOrderByWithAggregationInput.prototype, "_sum", void 0);
Calendar_datesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Calendar_datesOrderByWithAggregationInput", {
        isAbstract: true
    })
], Calendar_datesOrderByWithAggregationInput);
exports.Calendar_datesOrderByWithAggregationInput = Calendar_datesOrderByWithAggregationInput;
