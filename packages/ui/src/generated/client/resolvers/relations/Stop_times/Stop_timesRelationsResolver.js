"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_times_1 = require("../../../models/Stop_times");
const Stops_1 = require("../../../models/Stops");
const Trips_1 = require("../../../models/Trips");
const helpers_1 = require("../../../helpers");
let Stop_timesRelationsResolver = class Stop_timesRelationsResolver {
    async stops(stop_times, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.findUnique({
            where: {
                idx: stop_times.idx,
            },
        }).stops({});
    }
    async trips(stop_times, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.findUnique({
            where: {
                idx: stop_times.idx,
            },
        }).trips({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Stops_1.Stops, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Stop_times_1.Stop_times, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesRelationsResolver.prototype, "stops", null);
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Trips_1.Trips, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Stop_times_1.Stop_times, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesRelationsResolver.prototype, "trips", null);
Stop_timesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], Stop_timesRelationsResolver);
exports.Stop_timesRelationsResolver = Stop_timesRelationsResolver;
