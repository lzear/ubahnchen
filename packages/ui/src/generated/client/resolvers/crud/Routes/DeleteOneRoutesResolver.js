"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneRoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneRoutesArgs_1 = require("./args/DeleteOneRoutesArgs");
const Routes_1 = require("../../../models/Routes");
const helpers_1 = require("../../../helpers");
let DeleteOneRoutesResolver = class DeleteOneRoutesResolver {
    async deleteOneRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Routes_1.Routes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneRoutesArgs_1.DeleteOneRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteOneRoutesResolver.prototype, "deleteOneRoutes", null);
DeleteOneRoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Routes_1.Routes)
], DeleteOneRoutesResolver);
exports.DeleteOneRoutesResolver = DeleteOneRoutesResolver;
