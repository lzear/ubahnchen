"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTripsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneTripsArgs_1 = require("./args/UpsertOneTripsArgs");
const Trips_1 = require("../../../models/Trips");
const helpers_1 = require("../../../helpers");
let UpsertOneTripsResolver = class UpsertOneTripsResolver {
    async upsertOneTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Trips_1.Trips, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneTripsArgs_1.UpsertOneTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneTripsResolver.prototype, "upsertOneTrips", null);
UpsertOneTripsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trips_1.Trips)
], UpsertOneTripsResolver);
exports.UpsertOneTripsResolver = UpsertOneTripsResolver;
