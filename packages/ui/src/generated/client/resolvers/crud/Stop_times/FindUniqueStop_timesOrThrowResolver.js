"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueStop_timesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueStop_timesOrThrowArgs_1 = require("./args/FindUniqueStop_timesOrThrowArgs");
const Stop_times_1 = require("../../../models/Stop_times");
const helpers_1 = require("../../../helpers");
let FindUniqueStop_timesOrThrowResolver = class FindUniqueStop_timesOrThrowResolver {
    async findUniqueStop_timesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Stop_times_1.Stop_times, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStop_timesOrThrowArgs_1.FindUniqueStop_timesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueStop_timesOrThrowResolver.prototype, "findUniqueStop_timesOrThrow", null);
FindUniqueStop_timesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], FindUniqueStop_timesOrThrowResolver);
exports.FindUniqueStop_timesOrThrowResolver = FindUniqueStop_timesOrThrowResolver;
