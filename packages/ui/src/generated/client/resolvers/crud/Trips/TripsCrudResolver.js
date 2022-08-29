"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateTripsArgs_1 = require("./args/AggregateTripsArgs");
const CreateOneTripsArgs_1 = require("./args/CreateOneTripsArgs");
const DeleteManyTripsArgs_1 = require("./args/DeleteManyTripsArgs");
const DeleteOneTripsArgs_1 = require("./args/DeleteOneTripsArgs");
const FindFirstTripsArgs_1 = require("./args/FindFirstTripsArgs");
const FindManyTripsArgs_1 = require("./args/FindManyTripsArgs");
const FindUniqueTripsArgs_1 = require("./args/FindUniqueTripsArgs");
const GroupByTripsArgs_1 = require("./args/GroupByTripsArgs");
const UpdateManyTripsArgs_1 = require("./args/UpdateManyTripsArgs");
const UpdateOneTripsArgs_1 = require("./args/UpdateOneTripsArgs");
const UpsertOneTripsArgs_1 = require("./args/UpsertOneTripsArgs");
const helpers_1 = require("../../../helpers");
const Trips_1 = require("../../../models/Trips");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateTrips_1 = require("../../outputs/AggregateTrips");
const TripsGroupBy_1 = require("../../outputs/TripsGroupBy");
let TripsCrudResolver = class TripsCrudResolver {
    async aggregateTrips(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOneTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByTrips(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneTrips(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).trips.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
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
], TripsCrudResolver.prototype, "aggregateTrips", null);
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
], TripsCrudResolver.prototype, "createOneTrips", null);
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
], TripsCrudResolver.prototype, "deleteManyTrips", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Trips_1.Trips, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneTripsArgs_1.DeleteOneTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TripsCrudResolver.prototype, "deleteOneTrips", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Trips_1.Trips, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstTripsArgs_1.FindFirstTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TripsCrudResolver.prototype, "findFirstTrips", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Trips_1.Trips], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyTripsArgs_1.FindManyTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TripsCrudResolver.prototype, "findManyTrips", null);
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
], TripsCrudResolver.prototype, "findUniqueTrips", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [TripsGroupBy_1.TripsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByTripsArgs_1.GroupByTripsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], TripsCrudResolver.prototype, "groupByTrips", null);
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
], TripsCrudResolver.prototype, "updateManyTrips", null);
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
], TripsCrudResolver.prototype, "updateOneTrips", null);
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
], TripsCrudResolver.prototype, "upsertOneTrips", null);
TripsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Trips_1.Trips)
], TripsCrudResolver);
exports.TripsCrudResolver = TripsCrudResolver;
