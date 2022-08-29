"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyRoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyRoutesArgs_1 = require("./args/FindManyRoutesArgs");
const Routes_1 = require("../../../models/Routes");
const helpers_1 = require("../../../helpers");
let FindManyRoutesResolver = class FindManyRoutesResolver {
    async findManyRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Routes_1.Routes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRoutesArgs_1.FindManyRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyRoutesResolver.prototype, "findManyRoutes", null);
FindManyRoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Routes_1.Routes)
], FindManyRoutesResolver);
exports.FindManyRoutesResolver = FindManyRoutesResolver;
