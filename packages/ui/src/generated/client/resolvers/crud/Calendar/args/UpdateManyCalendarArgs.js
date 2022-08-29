"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCalendarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CalendarUpdateManyMutationInput_1 = require("../../../inputs/CalendarUpdateManyMutationInput");
const CalendarWhereInput_1 = require("../../../inputs/CalendarWhereInput");
let UpdateManyCalendarArgs = class UpdateManyCalendarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarUpdateManyMutationInput_1.CalendarUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CalendarUpdateManyMutationInput_1.CalendarUpdateManyMutationInput)
], UpdateManyCalendarArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarWhereInput_1.CalendarWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CalendarWhereInput_1.CalendarWhereInput)
], UpdateManyCalendarArgs.prototype, "where", void 0);
UpdateManyCalendarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyCalendarArgs);
exports.UpdateManyCalendarArgs = UpdateManyCalendarArgs;
