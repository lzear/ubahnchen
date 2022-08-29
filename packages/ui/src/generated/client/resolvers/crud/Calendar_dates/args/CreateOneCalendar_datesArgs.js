"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCalendar_datesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesCreateInput_1 = require("../../../inputs/Calendar_datesCreateInput");
let CreateOneCalendar_datesArgs = class CreateOneCalendar_datesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesCreateInput_1.Calendar_datesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Calendar_datesCreateInput_1.Calendar_datesCreateInput)
], CreateOneCalendar_datesArgs.prototype, "data", void 0);
CreateOneCalendar_datesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneCalendar_datesArgs);
exports.CreateOneCalendar_datesArgs = CreateOneCalendar_datesArgs;
