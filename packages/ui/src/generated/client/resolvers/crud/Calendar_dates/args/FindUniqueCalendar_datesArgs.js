"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCalendar_datesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesWhereUniqueInput_1 = require("../../../inputs/Calendar_datesWhereUniqueInput");
let FindUniqueCalendar_datesArgs = class FindUniqueCalendar_datesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput)
], FindUniqueCalendar_datesArgs.prototype, "where", void 0);
FindUniqueCalendar_datesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCalendar_datesArgs);
exports.FindUniqueCalendar_datesArgs = FindUniqueCalendar_datesArgs;
