"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRoutesOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueRoutesOrThrowArgs_1 = require("./args/FindUniqueRoutesOrThrowArgs");
const Routes_1 = require("../../../models/Routes");
const helpers_1 = require("../../../helpers");
let FindUniqueRoutesOrThrowResolver = class FindUniqueRoutesOrThrowResolver {
    async findUniqueRoutesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRoutesOrThrowArgs_1.FindUniqueRoutesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueRoutesOrThrowResolver.prototype, "findUniqueRoutesOrThrow", null);
FindUniqueRoutesOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Routes_1.Routes)
], FindUniqueRoutesOrThrowResolver);
exports.FindUniqueRoutesOrThrowResolver = FindUniqueRoutesOrThrowResolver;
