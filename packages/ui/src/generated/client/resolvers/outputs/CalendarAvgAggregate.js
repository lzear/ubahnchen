"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CalendarAvgAggregate = class CalendarAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarAvgAggregate.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarAvgAggregate.prototype, "monday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarAvgAggregate.prototype, "tuesday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarAvgAggregate.prototype, "wednesday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarAvgAggregate.prototype, "thursday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarAvgAggregate.prototype, "friday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarAvgAggregate.prototype, "saturday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarAvgAggregate.prototype, "sunday", void 0);
CalendarAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CalendarAvgAggregate", {
        isAbstract: true
    })
], CalendarAvgAggregate);
exports.CalendarAvgAggregate = CalendarAvgAggregate;
