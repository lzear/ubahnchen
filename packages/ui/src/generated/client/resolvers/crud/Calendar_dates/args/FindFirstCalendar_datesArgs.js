"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCalendar_datesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesOrderByWithRelationInput_1 = require("../../../inputs/Calendar_datesOrderByWithRelationInput");
const Calendar_datesWhereInput_1 = require("../../../inputs/Calendar_datesWhereInput");
const Calendar_datesWhereUniqueInput_1 = require("../../../inputs/Calendar_datesWhereUniqueInput");
const Calendar_datesScalarFieldEnum_1 = require("../../../../enums/Calendar_datesScalarFieldEnum");
let FindFirstCalendar_datesArgs = class FindFirstCalendar_datesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereInput_1.Calendar_datesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereInput_1.Calendar_datesWhereInput)
], FindFirstCalendar_datesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Calendar_datesOrderByWithRelationInput_1.Calendar_datesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCalendar_datesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput)
], FindFirstCalendar_datesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCalendar_datesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCalendar_datesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Calendar_datesScalarFieldEnum_1.Calendar_datesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCalendar_datesArgs.prototype, "distinct", void 0);
FindFirstCalendar_datesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCalendar_datesArgs);
exports.FindFirstCalendar_datesArgs = FindFirstCalendar_datesArgs;
