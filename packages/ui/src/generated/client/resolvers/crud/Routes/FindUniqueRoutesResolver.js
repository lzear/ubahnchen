"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueRoutesArgs_1 = require("./args/FindUniqueRoutesArgs");
const Routes_1 = require("../../../models/Routes");
const helpers_1 = require("../../../helpers");
let FindUniqueRoutesResolver = class FindUniqueRoutesResolver {
    async findUniqueRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRoutesArgs_1.FindUniqueRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueRoutesResolver.prototype, "findUniqueRoutes", null);
FindUniqueRoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Routes_1.Routes)
], FindUniqueRoutesResolver);
exports.FindUniqueRoutesResolver = FindUniqueRoutesResolver;
