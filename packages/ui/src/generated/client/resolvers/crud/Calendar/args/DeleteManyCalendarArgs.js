"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCalendarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CalendarWhereInput_1 = require("../../../inputs/CalendarWhereInput");
let DeleteManyCalendarArgs = class DeleteManyCalendarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarWhereInput_1.CalendarWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarWhereInput_1.CalendarWhereInput)
], DeleteManyCalendarArgs.prototype, "where", void 0);
DeleteManyCalendarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCalendarArgs);
exports.DeleteManyCalendarArgs = DeleteManyCalendarArgs;
