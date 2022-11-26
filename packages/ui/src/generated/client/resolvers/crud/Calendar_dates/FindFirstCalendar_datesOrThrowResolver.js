"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCalendar_datesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCalendar_datesOrThrowArgs_1 = require("./args/FindFirstCalendar_datesOrThrowArgs");
const Calendar_dates_1 = require("../../../models/Calendar_dates");
const helpers_1 = require("../../../helpers");
let FindFirstCalendar_datesOrThrowResolver = class FindFirstCalendar_datesOrThrowResolver {
    async findFirstCalendar_datesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Calendar_dates_1.Calendar_dates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCalendar_datesOrThrowArgs_1.FindFirstCalendar_datesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCalendar_datesOrThrowResolver.prototype, "findFirstCalendar_datesOrThrow", null);
FindFirstCalendar_datesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_dates_1.Calendar_dates)
], FindFirstCalendar_datesOrThrowResolver);
exports.FindFirstCalendar_datesOrThrowResolver = FindFirstCalendar_datesOrThrowResolver;
