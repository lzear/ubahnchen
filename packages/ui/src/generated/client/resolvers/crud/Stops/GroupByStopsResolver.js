"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByStopsArgs_1 = require("./args/GroupByStopsArgs");
const Stops_1 = require("../../../models/Stops");
const StopsGroupBy_1 = require("../../outputs/StopsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByStopsResolver = class GroupByStopsResolver {
    async groupByStops(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [StopsGroupBy_1.StopsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByStopsArgs_1.GroupByStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByStopsResolver.prototype, "groupByStops", null);
GroupByStopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stops_1.Stops)
], GroupByStopsResolver);
exports.GroupByStopsResolver = GroupByStopsResolver;
