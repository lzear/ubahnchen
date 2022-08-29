"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCalendar_datesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesUpdateManyMutationInput_1 = require("../../../inputs/Calendar_datesUpdateManyMutationInput");
const Calendar_datesWhereInput_1 = require("../../../inputs/Calendar_datesWhereInput");
let UpdateManyCalendar_datesArgs = class UpdateManyCalendar_datesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesUpdateManyMutationInput_1.Calendar_datesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Calendar_datesUpdateManyMutationInput_1.Calendar_datesUpdateManyMutationInput)
], UpdateManyCalendar_datesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereInput_1.Calendar_datesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereInput_1.Calendar_datesWhereInput)
], UpdateManyCalendar_datesArgs.prototype, "where", void 0);
UpdateManyCalendar_datesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCalendar_datesArgs);
exports.UpdateManyCalendar_datesArgs = UpdateManyCalendar_datesArgs;
