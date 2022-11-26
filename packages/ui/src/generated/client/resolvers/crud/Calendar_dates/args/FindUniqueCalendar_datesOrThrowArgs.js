"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCalendar_datesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesWhereUniqueInput_1 = require("../../../inputs/Calendar_datesWhereUniqueInput");
let FindUniqueCalendar_datesOrThrowArgs = class FindUniqueCalendar_datesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput)
], FindUniqueCalendar_datesOrThrowArgs.prototype, "where", void 0);
FindUniqueCalendar_datesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCalendar_datesOrThrowArgs);
exports.FindUniqueCalendar_datesOrThrowArgs = FindUniqueCalendar_datesOrThrowArgs;
