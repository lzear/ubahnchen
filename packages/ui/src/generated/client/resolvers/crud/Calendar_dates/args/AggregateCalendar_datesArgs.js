"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCalendar_datesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesOrderByWithRelationInput_1 = require("../../../inputs/Calendar_datesOrderByWithRelationInput");
const Calendar_datesWhereInput_1 = require("../../../inputs/Calendar_datesWhereInput");
const Calendar_datesWhereUniqueInput_1 = require("../../../inputs/Calendar_datesWhereUniqueInput");
let AggregateCalendar_datesArgs = class AggregateCalendar_datesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereInput_1.Calendar_datesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereInput_1.Calendar_datesWhereInput)
], AggregateCalendar_datesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Calendar_datesOrderByWithRelationInput_1.Calendar_datesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCalendar_datesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput)
], AggregateCalendar_datesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCalendar_datesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCalendar_datesArgs.prototype, "skip", void 0);
AggregateCalendar_datesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCalendar_datesArgs);
exports.AggregateCalendar_datesArgs = AggregateCalendar_datesArgs;
