"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CalendarAvgOrderByAggregateInput_1 = require("../inputs/CalendarAvgOrderByAggregateInput");
const CalendarCountOrderByAggregateInput_1 = require("../inputs/CalendarCountOrderByAggregateInput");
const CalendarMaxOrderByAggregateInput_1 = require("../inputs/CalendarMaxOrderByAggregateInput");
const CalendarMinOrderByAggregateInput_1 = require("../inputs/CalendarMinOrderByAggregateInput");
const CalendarSumOrderByAggregateInput_1 = require("../inputs/CalendarSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CalendarOrderByWithAggregationInput = class CalendarOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarOrderByWithAggregationInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarOrderByWithAggregationInput.prototype, "monday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarOrderByWithAggregationInput.prototype, "tuesday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarOrderByWithAggregationInput.prototype, "wednesday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarOrderByWithAggregationInput.prototype, "thursday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarOrderByWithAggregationInput.prototype, "friday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarOrderByWithAggregationInput.prototype, "saturday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarOrderByWithAggregationInput.prototype, "sunday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarOrderByWithAggregationInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarOrderByWithAggregationInput.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarCountOrderByAggregateInput_1.CalendarCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarCountOrderByAggregateInput_1.CalendarCountOrderByAggregateInput)
], CalendarOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarAvgOrderByAggregateInput_1.CalendarAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarAvgOrderByAggregateInput_1.CalendarAvgOrderByAggregateInput)
], CalendarOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarMaxOrderByAggregateInput_1.CalendarMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarMaxOrderByAggregateInput_1.CalendarMaxOrderByAggregateInput)
], CalendarOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarMinOrderByAggregateInput_1.CalendarMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarMinOrderByAggregateInput_1.CalendarMinOrderByAggregateInput)
], CalendarOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarSumOrderByAggregateInput_1.CalendarSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarSumOrderByAggregateInput_1.CalendarSumOrderByAggregateInput)
], CalendarOrderByWithAggregationInput.prototype, "_sum", void 0);
CalendarOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CalendarOrderByWithAggregationInput", {
        isAbstract: true
    })
], CalendarOrderByWithAggregationInput);
exports.CalendarOrderByWithAggregationInput = CalendarOrderByWithAggregationInput;
