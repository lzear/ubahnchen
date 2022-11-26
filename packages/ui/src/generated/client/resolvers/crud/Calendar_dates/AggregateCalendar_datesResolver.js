"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCalendar_datesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCalendar_datesArgs_1 = require("./args/AggregateCalendar_datesArgs");
const Calendar_dates_1 = require("../../../models/Calendar_dates");
const AggregateCalendar_dates_1 = require("../../outputs/AggregateCalendar_dates");
const helpers_1 = require("../../../helpers");
let AggregateCalendar_datesResolver = class AggregateCalendar_datesResolver {
    async aggregateCalendar_dates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCalendar_dates_1.AggregateCalendar_dates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCalendar_datesArgs_1.AggregateCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCalendar_datesResolver.prototype, "aggregateCalendar_dates", null);
AggregateCalendar_datesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_dates_1.Calendar_dates)
], AggregateCalendar_datesResolver);
exports.AggregateCalendar_datesResolver = AggregateCalendar_datesResolver;
