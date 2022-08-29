"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTripsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyTripsArgs_1 = require("./args/DeleteManyTripsArgs");
const Trips_1 = require("../../../models/Trips");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyTripsResolver = class DeleteManyTripsResolver {
    async deleteManyTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyTripsArgs_1.DeleteManyTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyTripsResolver.prototype, "deleteManyTrips", null);
DeleteManyTripsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trips_1.Trips)
], DeleteManyTripsResolver);
exports.DeleteManyTripsResolver = DeleteManyTripsResolver;
