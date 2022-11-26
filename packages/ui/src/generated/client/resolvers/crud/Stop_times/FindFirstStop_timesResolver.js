"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstStop_timesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstStop_timesArgs_1 = require("./args/FindFirstStop_timesArgs");
const Stop_times_1 = require("../../../models/Stop_times");
const helpers_1 = require("../../../helpers");
let FindFirstStop_timesResolver = class FindFirstStop_timesResolver {
    async findFirstStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.findFirst({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStop_timesArgs_1.FindFirstStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstStop_timesResolver.prototype, "findFirstStop_times", null);
FindFirstStop_timesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], FindFirstStop_timesResolver);
exports.FindFirstStop_timesResolver = FindFirstStop_timesResolver;
