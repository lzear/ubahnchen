"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneRoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneRoutesArgs_1 = require("./args/UpdateOneRoutesArgs");
const Routes_1 = require("../../../models/Routes");
const helpers_1 = require("../../../helpers");
let UpdateOneRoutesResolver = class UpdateOneRoutesResolver {
    async updateOneRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneRoutesArgs_1.UpdateOneRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneRoutesResolver.prototype, "updateOneRoutes", null);
UpdateOneRoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Routes_1.Routes)
], UpdateOneRoutesResolver);
exports.UpdateOneRoutesResolver = UpdateOneRoutesResolver;
