"use strict";
var CalendarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let CalendarWhereInput = CalendarWhereInput_1 = class CalendarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CalendarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CalendarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CalendarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CalendarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CalendarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CalendarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CalendarWhereInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CalendarWhereInput.prototype, "monday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CalendarWhereInput.prototype, "tuesday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CalendarWhereInput.prototype, "wednesday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CalendarWhereInput.prototype, "thursday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CalendarWhereInput.prototype, "friday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CalendarWhereInput.prototype, "saturday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], CalendarWhereInput.prototype, "sunday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CalendarWhereInput.prototype, "start_date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], CalendarWhereInput.prototype, "end_date", void 0);
CalendarWhereInput = CalendarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("CalendarWhereInput", {
        isAbstract: true
    })
], CalendarWhereInput);
exports.CalendarWhereInput = CalendarWhereInput;
