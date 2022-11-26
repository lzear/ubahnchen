"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstRoutesArgs_1 = require("./args/FindFirstRoutesArgs");
const Routes_1 = require("../../../models/Routes");
const helpers_1 = require("../../../helpers");
let FindFirstRoutesResolver = class FindFirstRoutesResolver {
    async findFirstRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Routes_1.Routes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRoutesArgs_1.FindFirstRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstRoutesResolver.prototype, "findFirstRoutes", null);
FindFirstRoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Routes_1.Routes)
], FindFirstRoutesResolver);
exports.FindFirstRoutesResolver = FindFirstRoutesResolver;
