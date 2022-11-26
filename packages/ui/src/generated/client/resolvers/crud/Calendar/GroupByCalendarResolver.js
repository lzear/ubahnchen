"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByCalendarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByCalendarArgs_1 = require("./args/GroupByCalendarArgs");
const Calendar_1 = require("../../../models/Calendar");
const CalendarGroupBy_1 = require("../../outputs/CalendarGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByCalendarResolver = class GroupByCalendarResolver {
    async groupByCalendar(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CalendarGroupBy_1.CalendarGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCalendarArgs_1.GroupByCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByCalendarResolver.prototype, "groupByCalendar", null);
GroupByCalendarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_1.Calendar)
], GroupByCalendarResolver);
exports.GroupByCalendarResolver = GroupByCalendarResolver;
