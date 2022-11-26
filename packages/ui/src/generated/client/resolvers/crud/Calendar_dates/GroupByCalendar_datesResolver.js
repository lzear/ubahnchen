"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCalendar_datesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCalendar_datesArgs_1 = require("./args/GroupByCalendar_datesArgs");
const Calendar_dates_1 = require("../../../models/Calendar_dates");
const Calendar_datesGroupBy_1 = require("../../outputs/Calendar_datesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCalendar_datesResolver = class GroupByCalendar_datesResolver {
    async groupByCalendar_dates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Calendar_datesGroupBy_1.Calendar_datesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCalendar_datesArgs_1.GroupByCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCalendar_datesResolver.prototype, "groupByCalendar_dates", null);
GroupByCalendar_datesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_dates_1.Calendar_dates)
], GroupByCalendar_datesResolver);
exports.GroupByCalendar_datesResolver = GroupByCalendar_datesResolver;
