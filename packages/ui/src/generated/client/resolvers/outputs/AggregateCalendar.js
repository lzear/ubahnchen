"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCalendar = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CalendarAvgAggregate_1 = require("../outputs/CalendarAvgAggregate");
const CalendarCountAggregate_1 = require("../outputs/CalendarCountAggregate");
const CalendarMaxAggregate_1 = require("../outputs/CalendarMaxAggregate");
const CalendarMinAggregate_1 = require("../outputs/CalendarMinAggregate");
const CalendarSumAggregate_1 = require("../outputs/CalendarSumAggregate");
let AggregateCalendar = class AggregateCalendar {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarCountAggregate_1.CalendarCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarCountAggregate_1.CalendarCountAggregate)
], AggregateCalendar.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarAvgAggregate_1.CalendarAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarAvgAggregate_1.CalendarAvgAggregate)
], AggregateCalendar.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarSumAggregate_1.CalendarSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarSumAggregate_1.CalendarSumAggregate)
], AggregateCalendar.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarMinAggregate_1.CalendarMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarMinAggregate_1.CalendarMinAggregate)
], AggregateCalendar.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarMaxAggregate_1.CalendarMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarMaxAggregate_1.CalendarMaxAggregate)
], AggregateCalendar.prototype, "_max", void 0);
AggregateCalendar = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCalendar", {
        isAbstract: true
    })
], AggregateCalendar);
exports.AggregateCalendar = AggregateCalendar;
