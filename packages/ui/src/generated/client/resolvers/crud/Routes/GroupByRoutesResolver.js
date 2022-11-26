"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByRoutesArgs_1 = require("./args/GroupByRoutesArgs");
const Routes_1 = require("../../../models/Routes");
const RoutesGroupBy_1 = require("../../outputs/RoutesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByRoutesResolver = class GroupByRoutesResolver {
    async groupByRoutes(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RoutesGroupBy_1.RoutesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRoutesArgs_1.GroupByRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByRoutesResolver.prototype, "groupByRoutes", null);
GroupByRoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Routes_1.Routes)
], GroupByRoutesResolver);
exports.GroupByRoutesResolver = GroupByRoutesResolver;
