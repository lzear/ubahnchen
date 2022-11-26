"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCalendar_datesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyCalendar_datesArgs_1 = require("./args/FindManyCalendar_datesArgs");
const Calendar_dates_1 = require("../../../models/Calendar_dates");
const helpers_1 = require("../../../helpers");
let FindManyCalendar_datesResolver = class FindManyCalendar_datesResolver {
    async findManyCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Calendar_dates_1.Calendar_dates], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCalendar_datesArgs_1.FindManyCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyCalendar_datesResolver.prototype, "findManyCalendar_dates", null);
FindManyCalendar_datesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_dates_1.Calendar_dates)
], FindManyCalendar_datesResolver);
exports.FindManyCalendar_datesResolver = FindManyCalendar_datesResolver;
