"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCalendarArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CalendarCreateInput_1 = require("../../../inputs/CalendarCreateInput");
const CalendarUpdateInput_1 = require("../../../inputs/CalendarUpdateInput");
const CalendarWhereUniqueInput_1 = require("../../../inputs/CalendarWhereUniqueInput");
let UpsertOneCalendarArgs = class UpsertOneCalendarArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarWhereUniqueInput_1.CalendarWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CalendarWhereUniqueInput_1.CalendarWhereUniqueInput)
], UpsertOneCalendarArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarCreateInput_1.CalendarCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CalendarCreateInput_1.CalendarCreateInput)
], UpsertOneCalendarArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CalendarUpdateInput_1.CalendarUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CalendarUpdateInput_1.CalendarUpdateInput)
], UpsertOneCalendarArgs.prototype, "update", void 0);
UpsertOneCalendarArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCalendarArgs);
exports.UpsertOneCalendarArgs = UpsertOneCalendarArgs;
