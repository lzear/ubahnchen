"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCalendar_datesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesWhereUniqueInput_1 = require("../../../inputs/Calendar_datesWhereUniqueInput");
let DeleteOneCalendar_datesArgs = class DeleteOneCalendar_datesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput)
], DeleteOneCalendar_datesArgs.prototype, "where", void 0);
DeleteOneCalendar_datesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneCalendar_datesArgs);
exports.DeleteOneCalendar_datesArgs = DeleteOneCalendar_datesArgs;
