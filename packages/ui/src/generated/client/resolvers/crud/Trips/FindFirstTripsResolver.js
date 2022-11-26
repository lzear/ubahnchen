"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTripsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstTripsArgs_1 = require("./args/FindFirstTripsArgs");
const Trips_1 = require("../../../models/Trips");
const helpers_1 = require("../../../helpers");
let FindFirstTripsResolver = class FindFirstTripsResolver {
    async findFirstTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Trips_1.Trips, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTripsArgs_1.FindFirstTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstTripsResolver.prototype, "findFirstTrips", null);
FindFirstTripsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trips_1.Trips)
], FindFirstTripsResolver);
exports.FindFirstTripsResolver = FindFirstTripsResolver;
