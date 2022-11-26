"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCalendarOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueCalendarOrThrowArgs_1 = require("./args/FindUniqueCalendarOrThrowArgs");
const Calendar_1 = require("../../../models/Calendar");
const helpers_1 = require("../../../helpers");
let FindUniqueCalendarOrThrowResolver = class FindUniqueCalendarOrThrowResolver {
    async getCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Calendar_1.Calendar, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCalendarOrThrowArgs_1.FindUniqueCalendarOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCalendarOrThrowResolver.prototype, "getCalendar", null);
FindUniqueCalendarOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_1.Calendar)
], FindUniqueCalendarOrThrowResolver);
exports.FindUniqueCalendarOrThrowResolver = FindUniqueCalendarOrThrowResolver;
