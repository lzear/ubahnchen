"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCalendarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CalendarOrderByWithAggregationInput_1 = require("../../../inputs/CalendarOrderByWithAggregationInput");
const CalendarScalarWhereWithAggregatesInput_1 = require("../../../inputs/CalendarScalarWhereWithAggregatesInput");
const CalendarWhereInput_1 = require("../../../inputs/CalendarWhereInput");
const CalendarScalarFieldEnum_1 = require("../../../../enums/CalendarScalarFieldEnum");
let GroupByCalendarArgs = class GroupByCalendarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarWhereInput_1.CalendarWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarWhereInput_1.CalendarWhereInput)
], GroupByCalendarArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CalendarOrderByWithAggregationInput_1.CalendarOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCalendarArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CalendarScalarFieldEnum_1.CalendarScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCalendarArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarScalarWhereWithAggregatesInput_1.CalendarScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarScalarWhereWithAggregatesInput_1.CalendarScalarWhereWithAggregatesInput)
], GroupByCalendarArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCalendarArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCalendarArgs.prototype, "skip", void 0);
GroupByCalendarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCalendarArgs);
exports.GroupByCalendarArgs = GroupByCalendarArgs;
