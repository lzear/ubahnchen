"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCalendar_dates = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesAvgAggregate_1 = require("../outputs/Calendar_datesAvgAggregate");
const Calendar_datesCountAggregate_1 = require("../outputs/Calendar_datesCountAggregate");
const Calendar_datesMaxAggregate_1 = require("../outputs/Calendar_datesMaxAggregate");
const Calendar_datesMinAggregate_1 = require("../outputs/Calendar_datesMinAggregate");
const Calendar_datesSumAggregate_1 = require("../outputs/Calendar_datesSumAggregate");
let AggregateCalendar_dates = class AggregateCalendar_dates {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesCountAggregate_1.Calendar_datesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesCountAggregate_1.Calendar_datesCountAggregate)
], AggregateCalendar_dates.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesAvgAggregate_1.Calendar_datesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesAvgAggregate_1.Calendar_datesAvgAggregate)
], AggregateCalendar_dates.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesSumAggregate_1.Calendar_datesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesSumAggregate_1.Calendar_datesSumAggregate)
], AggregateCalendar_dates.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesMinAggregate_1.Calendar_datesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesMinAggregate_1.Calendar_datesMinAggregate)
], AggregateCalendar_dates.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesMaxAggregate_1.Calendar_datesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesMaxAggregate_1.Calendar_datesMaxAggregate)
], AggregateCalendar_dates.prototype, "_max", void 0);
AggregateCalendar_dates = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCalendar_dates", {
        isAbstract: true
    })
], AggregateCalendar_dates);
exports.AggregateCalendar_dates = AggregateCalendar_dates;
