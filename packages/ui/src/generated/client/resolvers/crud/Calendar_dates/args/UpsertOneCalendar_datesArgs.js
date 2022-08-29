"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCalendar_datesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesCreateInput_1 = require("../../../inputs/Calendar_datesCreateInput");
const Calendar_datesUpdateInput_1 = require("../../../inputs/Calendar_datesUpdateInput");
const Calendar_datesWhereUniqueInput_1 = require("../../../inputs/Calendar_datesWhereUniqueInput");
let UpsertOneCalendar_datesArgs = class UpsertOneCalendar_datesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Calendar_datesWhereUniqueInput_1.Calendar_datesWhereUniqueInput)
], UpsertOneCalendar_datesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesCreateInput_1.Calendar_datesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Calendar_datesCreateInput_1.Calendar_datesCreateInput)
], UpsertOneCalendar_datesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesUpdateInput_1.Calendar_datesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Calendar_datesUpdateInput_1.Calendar_datesUpdateInput)
], UpsertOneCalendar_datesArgs.prototype, "update", void 0);
UpsertOneCalendar_datesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneCalendar_datesArgs);
exports.UpsertOneCalendar_datesArgs = UpsertOneCalendar_datesArgs;
