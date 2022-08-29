"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CalendarAvgAggregate_1 = require("../outputs/CalendarAvgAggregate");
const CalendarCountAggregate_1 = require("../outputs/CalendarCountAggregate");
const CalendarMaxAggregate_1 = require("../outputs/CalendarMaxAggregate");
const CalendarMinAggregate_1 = require("../outputs/CalendarMinAggregate");
const CalendarSumAggregate_1 = require("../outputs/CalendarSumAggregate");
let CalendarGroupBy = class CalendarGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarGroupBy.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarGroupBy.prototype, "monday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarGroupBy.prototype, "tuesday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarGroupBy.prototype, "wednesday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarGroupBy.prototype, "thursday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarGroupBy.prototype, "friday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarGroupBy.prototype, "saturday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarGroupBy.prototype, "sunday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CalendarGroupBy.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CalendarGroupBy.prototype, "end_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarCountAggregate_1.CalendarCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarCountAggregate_1.CalendarCountAggregate)
], CalendarGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarAvgAggregate_1.CalendarAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarAvgAggregate_1.CalendarAvgAggregate)
], CalendarGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarSumAggregate_1.CalendarSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarSumAggregate_1.CalendarSumAggregate)
], CalendarGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarMinAggregate_1.CalendarMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarMinAggregate_1.CalendarMinAggregate)
], CalendarGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarMaxAggregate_1.CalendarMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarMaxAggregate_1.CalendarMaxAggregate)
], CalendarGroupBy.prototype, "_max", void 0);
CalendarGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CalendarGroupBy", {
        isAbstract: true
    })
], CalendarGroupBy);
exports.CalendarGroupBy = CalendarGroupBy;
