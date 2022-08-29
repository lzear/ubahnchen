"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCalendarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CalendarCreateInput_1 = require("../../../inputs/CalendarCreateInput");
let CreateOneCalendarArgs = class CreateOneCalendarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarCreateInput_1.CalendarCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CalendarCreateInput_1.CalendarCreateInput)
], CreateOneCalendarArgs.prototype, "data", void 0);
CreateOneCalendarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCalendarArgs);
exports.CreateOneCalendarArgs = CreateOneCalendarArgs;
