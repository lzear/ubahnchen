"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTripsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateOneTripsArgs_1 = require("./args/UpdateOneTripsArgs");
const Trips_1 = require("../../../models/Trips");
const helpers_1 = require("../../../helpers");
let UpdateOneTripsResolver = class UpdateOneTripsResolver {
    async updateOneTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Trips_1.Trips, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneTripsArgs_1.UpdateOneTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneTripsResolver.prototype, "updateOneTrips", null);
UpdateOneTripsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trips_1.Trips)
], UpdateOneTripsResolver);
exports.UpdateOneTripsResolver = UpdateOneTripsResolver;
