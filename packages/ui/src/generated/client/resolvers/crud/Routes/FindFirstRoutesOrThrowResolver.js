"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRoutesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstRoutesOrThrowArgs_1 = require("./args/FindFirstRoutesOrThrowArgs");
const Routes_1 = require("../../../models/Routes");
const helpers_1 = require("../../../helpers");
let FindFirstRoutesOrThrowResolver = class FindFirstRoutesOrThrowResolver {
    async findFirstRoutesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRoutesOrThrowArgs_1.FindFirstRoutesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstRoutesOrThrowResolver.prototype, "findFirstRoutesOrThrow", null);
FindFirstRoutesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Routes_1.Routes)
], FindFirstRoutesOrThrowResolver);
exports.FindFirstRoutesOrThrowResolver = FindFirstRoutesOrThrowResolver;
