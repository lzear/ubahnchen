"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Routes_1 = require("../../../models/Routes");
const Stop_times_1 = require("../../../models/Stop_times");
const Trips_1 = require("../../../models/Trips");
const TripsStop_timesArgs_1 = require("./args/TripsStop_timesArgs");
const helpers_1 = require("../../../helpers");
let TripsRelationsResolver = class TripsRelationsResolver {
    async routes(trips, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.findUnique({
            where: {
                trip_id: trips.trip_id,
            },
        }).routes({});
    }
    async stop_times(trips, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.findUnique({
            where: {
                trip_id: trips.trip_id,
            },
        }).stop_times(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Routes_1.Routes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Trips_1.Trips, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], TripsRelationsResolver.prototype, "routes", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Stop_times_1.Stop_times], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Trips_1.Trips, Object, TripsStop_timesArgs_1.TripsStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TripsRelationsResolver.prototype, "stop_times", null);
TripsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trips_1.Trips)
], TripsRelationsResolver);
exports.TripsRelationsResolver = TripsRelationsResolver;
