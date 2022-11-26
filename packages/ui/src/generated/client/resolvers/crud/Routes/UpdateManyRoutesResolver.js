"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyRoutesArgs_1 = require("./args/UpdateManyRoutesArgs");
const Routes_1 = require("../../../models/Routes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyRoutesResolver = class UpdateManyRoutesResolver {
    async updateManyRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyRoutesArgs_1.UpdateManyRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyRoutesResolver.prototype, "updateManyRoutes", null);
UpdateManyRoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Routes_1.Routes)
], UpdateManyRoutesResolver);
exports.UpdateManyRoutesResolver = UpdateManyRoutesResolver;
