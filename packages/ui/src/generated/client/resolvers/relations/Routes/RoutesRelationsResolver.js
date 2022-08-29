"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Routes_1 = require("../../../models/Routes");
const Trips_1 = require("../../../models/Trips");
const RoutesTripsArgs_1 = require("./args/RoutesTripsArgs");
const helpers_1 = require("../../../helpers");
let RoutesRelationsResolver = class RoutesRelationsResolver {
    async trips(routes, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.findUnique({
            where: {
                route_id: routes.route_id,
            },
        }).trips(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Trips_1.Trips], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Routes_1.Routes, Object, RoutesTripsArgs_1.RoutesTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoutesRelationsResolver.prototype, "trips", null);
RoutesRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Routes_1.Routes)
], RoutesRelationsResolver);
exports.RoutesRelationsResolver = RoutesRelationsResolver;
