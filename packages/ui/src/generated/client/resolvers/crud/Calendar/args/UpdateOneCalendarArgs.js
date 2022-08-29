"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCalendarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CalendarUpdateInput_1 = require("../../../inputs/CalendarUpdateInput");
const CalendarWhereUniqueInput_1 = require("../../../inputs/CalendarWhereUniqueInput");
let UpdateOneCalendarArgs = class UpdateOneCalendarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarUpdateInput_1.CalendarUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CalendarUpdateInput_1.CalendarUpdateInput)
], UpdateOneCalendarArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarWhereUniqueInput_1.CalendarWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CalendarWhereUniqueInput_1.CalendarWhereUniqueInput)
], UpdateOneCalendarArgs.prototype, "where", void 0);
UpdateOneCalendarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneCalendarArgs);
exports.UpdateOneCalendarArgs = UpdateOneCalendarArgs;
