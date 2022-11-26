"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneStop_timesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneStop_timesArgs_1 = require("./args/UpsertOneStop_timesArgs");
const Stop_times_1 = require("../../../models/Stop_times");
const helpers_1 = require("../../../helpers");
let UpsertOneStop_timesResolver = class UpsertOneStop_timesResolver {
    async upsertOneStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stop_times_1.Stop_times, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneStop_timesArgs_1.UpsertOneStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneStop_timesResolver.prototype, "upsertOneStop_times", null);
UpsertOneStop_timesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], UpsertOneStop_timesResolver);
exports.UpsertOneStop_timesResolver = UpsertOneStop_timesResolver;
