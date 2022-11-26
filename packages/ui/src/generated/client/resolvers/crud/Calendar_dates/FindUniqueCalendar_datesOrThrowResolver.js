"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCalendar_datesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCalendar_datesOrThrowArgs_1 = require("./args/FindUniqueCalendar_datesOrThrowArgs");
const Calendar_dates_1 = require("../../../models/Calendar_dates");
const helpers_1 = require("../../../helpers");
let FindUniqueCalendar_datesOrThrowResolver = class FindUniqueCalendar_datesOrThrowResolver {
    async findUniqueCalendar_datesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCalendar_datesOrThrowArgs_1.FindUniqueCalendar_datesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCalendar_datesOrThrowResolver.prototype, "findUniqueCalendar_datesOrThrow", null);
FindUniqueCalendar_datesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_dates_1.Calendar_dates)
], FindUniqueCalendar_datesOrThrowResolver);
exports.FindUniqueCalendar_datesOrThrowResolver = FindUniqueCalendar_datesOrThrowResolver;
