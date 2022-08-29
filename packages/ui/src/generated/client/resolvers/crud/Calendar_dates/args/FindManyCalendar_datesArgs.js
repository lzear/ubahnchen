"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCalendar_datesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesOrderByWithRelationInput_1 = require("../../../inputs/Calendar_datesOrderByWithRelationInput");
const Calendar_datesWhereInput_1 = require("../../../inputs/Calendar_datesWhereInput");
const Calendar_datesWhereUniqueInput_1 = require("../../../inputs/Calendar_datesWhereUniqueInput");
const Calendar_datesScalarFieldEnum_1 = require("../../../../enums/Calendar_datesScalarFieldEnum");
let FindManyCalendar_datesArgs = class FindManyCalendar_datesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereInput_1.Calendar_datesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereInput_1.Calendar_datesWhereInput)
], FindManyCalendar_datesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Calendar_datesOrderByWithRelationInput_1.Calendar_datesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCalendar_datesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput)
], FindManyCalendar_datesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCalendar_datesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCalendar_datesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Calendar_datesScalarFieldEnum_1.Calendar_datesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCalendar_datesArgs.prototype, "distinct", void 0);
FindManyCalendar_datesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCalendar_datesArgs);
exports.FindManyCalendar_datesArgs = FindManyCalendar_datesArgs;
