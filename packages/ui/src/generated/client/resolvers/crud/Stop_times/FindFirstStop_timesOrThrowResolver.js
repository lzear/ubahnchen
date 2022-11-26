"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstStop_timesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstStop_timesOrThrowArgs_1 = require("./args/FindFirstStop_timesOrThrowArgs");
const Stop_times_1 = require("../../../models/Stop_times");
const helpers_1 = require("../../../helpers");
let FindFirstStop_timesOrThrowResolver = class FindFirstStop_timesOrThrowResolver {
    async findFirstStop_timesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStop_timesOrThrowArgs_1.FindFirstStop_timesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstStop_timesOrThrowResolver.prototype, "findFirstStop_timesOrThrow", null);
FindFirstStop_timesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], FindFirstStop_timesOrThrowResolver);
exports.FindFirstStop_timesOrThrowResolver = FindFirstStop_timesOrThrowResolver;
