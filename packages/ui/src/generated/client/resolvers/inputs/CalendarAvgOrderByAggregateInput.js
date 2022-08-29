"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CalendarAvgOrderByAggregateInput = class CalendarAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarAvgOrderByAggregateInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarAvgOrderByAggregateInput.prototype, "monday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarAvgOrderByAggregateInput.prototype, "tuesday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarAvgOrderByAggregateInput.prototype, "wednesday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarAvgOrderByAggregateInput.prototype, "thursday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarAvgOrderByAggregateInput.prototype, "friday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarAvgOrderByAggregateInput.prototype, "saturday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CalendarAvgOrderByAggregateInput.prototype, "sunday", void 0);
CalendarAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CalendarAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CalendarAvgOrderByAggregateInput);
exports.CalendarAvgOrderByAggregateInput = CalendarAvgOrderByAggregateInput;
