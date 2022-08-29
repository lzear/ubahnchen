"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCalendarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CalendarWhereUniqueInput_1 = require("../../../inputs/CalendarWhereUniqueInput");
let FindUniqueCalendarArgs = class FindUniqueCalendarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarWhereUniqueInput_1.CalendarWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CalendarWhereUniqueInput_1.CalendarWhereUniqueInput)
], FindUniqueCalendarArgs.prototype, "where", void 0);
FindUniqueCalendarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCalendarArgs);
exports.FindUniqueCalendarArgs = FindUniqueCalendarArgs;
