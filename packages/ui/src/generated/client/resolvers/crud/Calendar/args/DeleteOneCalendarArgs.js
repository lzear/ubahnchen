"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCalendarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CalendarWhereUniqueInput_1 = require("../../../inputs/CalendarWhereUniqueInput");
let DeleteOneCalendarArgs = class DeleteOneCalendarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarWhereUniqueInput_1.CalendarWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CalendarWhereUniqueInput_1.CalendarWhereUniqueInput)
], DeleteOneCalendarArgs.prototype, "where", void 0);
DeleteOneCalendarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCalendarArgs);
exports.DeleteOneCalendarArgs = DeleteOneCalendarArgs;
