"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTripsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyTripsArgs_1 = require("./args/UpdateManyTripsArgs");
const Trips_1 = require("../../../models/Trips");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyTripsResolver = class UpdateManyTripsResolver {
    async updateManyTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyTripsArgs_1.UpdateManyTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyTripsResolver.prototype, "updateManyTrips", null);
UpdateManyTripsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trips_1.Trips)
], UpdateManyTripsResolver);
exports.UpdateManyTripsResolver = UpdateManyTripsResolver;
