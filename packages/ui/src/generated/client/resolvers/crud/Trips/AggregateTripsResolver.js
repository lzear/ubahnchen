"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTripsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateTripsArgs_1 = require("./args/AggregateTripsArgs");
const Trips_1 = require("../../../models/Trips");
const AggregateTrips_1 = require("../../outputs/AggregateTrips");
const helpers_1 = require("../../../helpers");
let AggregateTripsResolver = class AggregateTripsResolver {
    async aggregateTrips(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateTrips_1.AggregateTrips, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateTripsArgs_1.AggregateTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateTripsResolver.prototype, "aggregateTrips", null);
AggregateTripsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trips_1.Trips)
], AggregateTripsResolver);
exports.AggregateTripsResolver = AggregateTripsResolver;
