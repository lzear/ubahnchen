"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyStop_timesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyStop_timesArgs_1 = require("./args/FindManyStop_timesArgs");
const Stop_times_1 = require("../../../models/Stop_times");
const helpers_1 = require("../../../helpers");
let FindManyStop_timesResolver = class FindManyStop_timesResolver {
    async findManyStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Stop_times_1.Stop_times], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyStop_timesArgs_1.FindManyStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyStop_timesResolver.prototype, "findManyStop_times", null);
FindManyStop_timesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], FindManyStop_timesResolver);
exports.FindManyStop_timesResolver = FindManyStop_timesResolver;
