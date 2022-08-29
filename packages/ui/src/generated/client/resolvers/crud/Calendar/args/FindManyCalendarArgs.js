"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCalendarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CalendarOrderByWithRelationInput_1 = require("../../../inputs/CalendarOrderByWithRelationInput");
const CalendarWhereInput_1 = require("../../../inputs/CalendarWhereInput");
const CalendarWhereUniqueInput_1 = require("../../../inputs/CalendarWhereUniqueInput");
const CalendarScalarFieldEnum_1 = require("../../../../enums/CalendarScalarFieldEnum");
let FindManyCalendarArgs = class FindManyCalendarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarWhereInput_1.CalendarWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarWhereInput_1.CalendarWhereInput)
], FindManyCalendarArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CalendarOrderByWithRelationInput_1.CalendarOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCalendarArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarWhereUniqueInput_1.CalendarWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarWhereUniqueInput_1.CalendarWhereUniqueInput)
], FindManyCalendarArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCalendarArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCalendarArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CalendarScalarFieldEnum_1.CalendarScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCalendarArgs.prototype, "distinct", void 0);
FindManyCalendarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCalendarArgs);
exports.FindManyCalendarArgs = FindManyCalendarArgs;
