"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTripsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneTripsArgs_1 = require("./args/CreateOneTripsArgs");
const Trips_1 = require("../../../models/Trips");
const helpers_1 = require("../../../helpers");
let CreateOneTripsResolver = class CreateOneTripsResolver {
    async createOneTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.create({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneTripsArgs_1.CreateOneTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneTripsResolver.prototype, "createOneTrips", null);
CreateOneTripsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trips_1.Trips)
], CreateOneTripsResolver);
exports.CreateOneTripsResolver = CreateOneTripsResolver;
