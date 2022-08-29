"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCalendar_datesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesUpdateInput_1 = require("../../../inputs/Calendar_datesUpdateInput");
const Calendar_datesWhereUniqueInput_1 = require("../../../inputs/Calendar_datesWhereUniqueInput");
let UpdateOneCalendar_datesArgs = class UpdateOneCalendar_datesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesUpdateInput_1.Calendar_datesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Calendar_datesUpdateInput_1.Calendar_datesUpdateInput)
], UpdateOneCalendar_datesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput)
], UpdateOneCalendar_datesArgs.prototype, "where", void 0);
UpdateOneCalendar_datesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCalendar_datesArgs);
exports.UpdateOneCalendar_datesArgs = UpdateOneCalendar_datesArgs;
