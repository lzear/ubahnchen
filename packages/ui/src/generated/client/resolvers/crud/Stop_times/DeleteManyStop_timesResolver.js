"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyStop_timesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyStop_timesArgs_1 = require("./args/DeleteManyStop_timesArgs");
const Stop_times_1 = require("../../../models/Stop_times");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyStop_timesResolver = class DeleteManyStop_timesResolver {
    async deleteManyStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyStop_timesArgs_1.DeleteManyStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyStop_timesResolver.prototype, "deleteManyStop_times", null);
DeleteManyStop_timesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], DeleteManyStop_timesResolver);
exports.DeleteManyStop_timesResolver = DeleteManyStop_timesResolver;
