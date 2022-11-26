"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCalendarOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstCalendarOrThrowArgs_1 = require("./args/FindFirstCalendarOrThrowArgs");
const Calendar_1 = require("../../../models/Calendar");
const helpers_1 = require("../../../helpers");
let FindFirstCalendarOrThrowResolver = class FindFirstCalendarOrThrowResolver {
    async findFirstCalendarOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCalendarOrThrowArgs_1.FindFirstCalendarOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstCalendarOrThrowResolver.prototype, "findFirstCalendarOrThrow", null);
FindFirstCalendarOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_1.Calendar)
], FindFirstCalendarOrThrowResolver);
exports.FindFirstCalendarOrThrowResolver = FindFirstCalendarOrThrowResolver;
