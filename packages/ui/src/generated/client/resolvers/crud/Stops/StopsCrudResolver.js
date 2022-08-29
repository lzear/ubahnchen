"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateStopsArgs_1 = require("./args/AggregateStopsArgs");
const CreateOneStopsArgs_1 = require("./args/CreateOneStopsArgs");
const DeleteManyStopsArgs_1 = require("./args/DeleteManyStopsArgs");
const DeleteOneStopsArgs_1 = require("./args/DeleteOneStopsArgs");
const FindFirstStopsArgs_1 = require("./args/FindFirstStopsArgs");
const FindManyStopsArgs_1 = require("./args/FindManyStopsArgs");
const FindUniqueStopsArgs_1 = require("./args/FindUniqueStopsArgs");
const GroupByStopsArgs_1 = require("./args/GroupByStopsArgs");
const UpdateManyStopsArgs_1 = require("./args/UpdateManyStopsArgs");
const UpdateOneStopsArgs_1 = require("./args/UpdateOneStopsArgs");
const UpsertOneStopsArgs_1 = require("./args/UpsertOneStopsArgs");
const helpers_1 = require("../../../helpers");
const Stops_1 = require("../../../models/Stops");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateStops_1 = require("../../outputs/AggregateStops");
const StopsGroupBy_1 = require("../../outputs/StopsGroupBy");
let StopsCrudResolver = class StopsCrudResolver {
    async aggregateStops(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOneStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByStops(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateStops_1.AggregateStops, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateStopsArgs_1.AggregateStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StopsCrudResolver.prototype, "aggregateStops", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stops_1.Stops, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneStopsArgs_1.CreateOneStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StopsCrudResolver.prototype, "createOneStops", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyStopsArgs_1.DeleteManyStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StopsCrudResolver.prototype, "deleteManyStops", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stops_1.Stops, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneStopsArgs_1.DeleteOneStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StopsCrudResolver.prototype, "deleteOneStops", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Stops_1.Stops, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStopsArgs_1.FindFirstStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StopsCrudResolver.prototype, "findFirstStops", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Stops_1.Stops], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyStopsArgs_1.FindManyStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StopsCrudResolver.prototype, "findManyStops", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Stops_1.Stops, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStopsArgs_1.FindUniqueStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StopsCrudResolver.prototype, "findUniqueStops", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [StopsGroupBy_1.StopsGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByStopsArgs_1.GroupByStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StopsCrudResolver.prototype, "groupByStops", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyStopsArgs_1.UpdateManyStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StopsCrudResolver.prototype, "updateManyStops", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stops_1.Stops, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneStopsArgs_1.UpdateOneStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StopsCrudResolver.prototype, "updateOneStops", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stops_1.Stops, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneStopsArgs_1.UpsertOneStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StopsCrudResolver.prototype, "upsertOneStops", null);
StopsCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stops_1.Stops)
], StopsCrudResolver);
exports.StopsCrudResolver = StopsCrudResolver;
