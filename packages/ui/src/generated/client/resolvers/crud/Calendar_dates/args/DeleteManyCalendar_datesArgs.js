"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCalendar_datesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesWhereInput_1 = require("../../../inputs/Calendar_datesWhereInput");
let DeleteManyCalendar_datesArgs = class DeleteManyCalendar_datesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereInput_1.Calendar_datesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereInput_1.Calendar_datesWhereInput)
], DeleteManyCalendar_datesArgs.prototype, "where", void 0);
DeleteManyCalendar_datesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCalendar_datesArgs);
exports.DeleteManyCalendar_datesArgs = DeleteManyCalendar_datesArgs;
