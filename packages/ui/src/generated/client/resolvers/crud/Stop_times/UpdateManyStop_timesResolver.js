"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyStop_timesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyStop_timesArgs_1 = require("./args/UpdateManyStop_timesArgs");
const Stop_times_1 = require("../../../models/Stop_times");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyStop_timesResolver = class UpdateManyStop_timesResolver {
    async updateManyStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyStop_timesArgs_1.UpdateManyStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyStop_timesResolver.prototype, "updateManyStop_times", null);
UpdateManyStop_timesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], UpdateManyStop_timesResolver);
exports.UpdateManyStop_timesResolver = UpdateManyStop_timesResolver;
