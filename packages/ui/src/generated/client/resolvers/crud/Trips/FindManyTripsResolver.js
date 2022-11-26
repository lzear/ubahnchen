"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyTripsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyTripsArgs_1 = require("./args/FindManyTripsArgs");
const Trips_1 = require("../../../models/Trips");
const helpers_1 = require("../../../helpers");
let FindManyTripsResolver = class FindManyTripsResolver {
    async findManyTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Trips_1.Trips], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTripsArgs_1.FindManyTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyTripsResolver.prototype, "findManyTrips", null);
FindManyTripsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trips_1.Trips)
], FindManyTripsResolver);
exports.FindManyTripsResolver = FindManyTripsResolver;
