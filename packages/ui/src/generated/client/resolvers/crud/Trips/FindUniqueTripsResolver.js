"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTripsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueTripsArgs_1 = require("./args/FindUniqueTripsArgs");
const Trips_1 = require("../../../models/Trips");
const helpers_1 = require("../../../helpers");
let FindUniqueTripsResolver = class FindUniqueTripsResolver {
    async findUniqueTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueTripsArgs_1.FindUniqueTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueTripsResolver.prototype, "findUniqueTrips", null);
FindUniqueTripsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trips_1.Trips)
], FindUniqueTripsResolver);
exports.FindUniqueTripsResolver = FindUniqueTripsResolver;
