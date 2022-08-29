"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCalendar_datesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesOrderByWithAggregationInput_1 = require("../../../inputs/Calendar_datesOrderByWithAggregationInput");
const Calendar_datesScalarWhereWithAggregatesInput_1 = require("../../../inputs/Calendar_datesScalarWhereWithAggregatesInput");
const Calendar_datesWhereInput_1 = require("../../../inputs/Calendar_datesWhereInput");
const Calendar_datesScalarFieldEnum_1 = require("../../../../enums/Calendar_datesScalarFieldEnum");
let GroupByCalendar_datesArgs = class GroupByCalendar_datesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereInput_1.Calendar_datesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereInput_1.Calendar_datesWhereInput)
], GroupByCalendar_datesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Calendar_datesOrderByWithAggregationInput_1.Calendar_datesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCalendar_datesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Calendar_datesScalarFieldEnum_1.Calendar_datesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByCalendar_datesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesScalarWhereWithAggregatesInput_1.Calendar_datesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesScalarWhereWithAggregatesInput_1.Calendar_datesScalarWhereWithAggregatesInput)
], GroupByCalendar_datesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCalendar_datesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByCalendar_datesArgs.prototype, "skip", void 0);
GroupByCalendar_datesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByCalendar_datesArgs);
exports.GroupByCalendar_datesArgs = GroupByCalendar_datesArgs;
