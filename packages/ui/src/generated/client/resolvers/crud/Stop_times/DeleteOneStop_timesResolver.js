"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneStop_timesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneStop_timesArgs_1 = require("./args/DeleteOneStop_timesArgs");
const Stop_times_1 = require("../../../models/Stop_times");
const helpers_1 = require("../../../helpers");
let DeleteOneStop_timesResolver = class DeleteOneStop_timesResolver {
    async deleteOneStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stop_times_1.Stop_times, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneStop_timesArgs_1.DeleteOneStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneStop_timesResolver.prototype, "deleteOneStop_times", null);
DeleteOneStop_timesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], DeleteOneStop_timesResolver);
exports.DeleteOneStop_timesResolver = DeleteOneStop_timesResolver;
