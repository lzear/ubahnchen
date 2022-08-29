"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneStop_timesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneStop_timesArgs_1 = require("./args/UpdateOneStop_timesArgs");
const Stop_times_1 = require("../../../models/Stop_times");
const helpers_1 = require("../../../helpers");
let UpdateOneStop_timesResolver = class UpdateOneStop_timesResolver {
    async updateOneStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneStop_timesArgs_1.UpdateOneStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneStop_timesResolver.prototype, "updateOneStop_times", null);
UpdateOneStop_timesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], UpdateOneStop_timesResolver);
exports.UpdateOneStop_timesResolver = UpdateOneStop_timesResolver;
