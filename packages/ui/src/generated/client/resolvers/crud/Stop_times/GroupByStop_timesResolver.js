"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStop_timesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByStop_timesArgs_1 = require("./args/GroupByStop_timesArgs");
const Stop_times_1 = require("../../../models/Stop_times");
const Stop_timesGroupBy_1 = require("../../outputs/Stop_timesGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByStop_timesResolver = class GroupByStop_timesResolver {
    async groupByStop_times(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Stop_timesGroupBy_1.Stop_timesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByStop_timesArgs_1.GroupByStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByStop_timesResolver.prototype, "groupByStop_times", null);
GroupByStop_timesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], GroupByStop_timesResolver);
exports.GroupByStop_timesResolver = GroupByStop_timesResolver;
