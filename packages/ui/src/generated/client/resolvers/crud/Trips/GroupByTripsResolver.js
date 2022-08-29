"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTripsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const GroupByTripsArgs_1 = require("./args/GroupByTripsArgs");
const Trips_1 = require("../../../models/Trips");
const TripsGroupBy_1 = require("../../outputs/TripsGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByTripsResolver = class GroupByTripsResolver {
    async groupByTrips(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TripsGroupBy_1.TripsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTripsArgs_1.GroupByTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByTripsResolver.prototype, "groupByTrips", null);
GroupByTripsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trips_1.Trips)
], GroupByTripsResolver);
exports.GroupByTripsResolver = GroupByTripsResolver;
