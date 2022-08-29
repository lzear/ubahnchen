"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateRoutesArgs_1 = require("./args/AggregateRoutesArgs");
const CreateOneRoutesArgs_1 = require("./args/CreateOneRoutesArgs");
const DeleteManyRoutesArgs_1 = require("./args/DeleteManyRoutesArgs");
const DeleteOneRoutesArgs_1 = require("./args/DeleteOneRoutesArgs");
const FindFirstRoutesArgs_1 = require("./args/FindFirstRoutesArgs");
const FindManyRoutesArgs_1 = require("./args/FindManyRoutesArgs");
const FindUniqueRoutesArgs_1 = require("./args/FindUniqueRoutesArgs");
const GroupByRoutesArgs_1 = require("./args/GroupByRoutesArgs");
const UpdateManyRoutesArgs_1 = require("./args/UpdateManyRoutesArgs");
const UpdateOneRoutesArgs_1 = require("./args/UpdateOneRoutesArgs");
const UpsertOneRoutesArgs_1 = require("./args/UpsertOneRoutesArgs");
const helpers_1 = require("../../../helpers");
const Routes_1 = require("../../../models/Routes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateRoutes_1 = require("../../outputs/AggregateRoutes");
const RoutesGroupBy_1 = require("../../outputs/RoutesGroupBy");
let RoutesCrudResolver = class RoutesCrudResolver {
    async aggregateRoutes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOneRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByRoutes(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRoutes_1.AggregateRoutes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRoutesArgs_1.AggregateRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoutesCrudResolver.prototype, "aggregateRoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Routes_1.Routes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneRoutesArgs_1.CreateOneRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoutesCrudResolver.prototype, "createOneRoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRoutesArgs_1.DeleteManyRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoutesCrudResolver.prototype, "deleteManyRoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Routes_1.Routes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneRoutesArgs_1.DeleteOneRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoutesCrudResolver.prototype, "deleteOneRoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Routes_1.Routes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstRoutesArgs_1.FindFirstRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoutesCrudResolver.prototype, "findFirstRoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Routes_1.Routes], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyRoutesArgs_1.FindManyRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoutesCrudResolver.prototype, "findManyRoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Routes_1.Routes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueRoutesArgs_1.FindUniqueRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoutesCrudResolver.prototype, "findUniqueRoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [RoutesGroupBy_1.RoutesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByRoutesArgs_1.GroupByRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoutesCrudResolver.prototype, "groupByRoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyRoutesArgs_1.UpdateManyRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoutesCrudResolver.prototype, "updateManyRoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Routes_1.Routes, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneRoutesArgs_1.UpdateOneRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoutesCrudResolver.prototype, "updateOneRoutes", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Routes_1.Routes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneRoutesArgs_1.UpsertOneRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], RoutesCrudResolver.prototype, "upsertOneRoutes", null);
RoutesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Routes_1.Routes)
], RoutesCrudResolver);
exports.RoutesCrudResolver = RoutesCrudResolver;
