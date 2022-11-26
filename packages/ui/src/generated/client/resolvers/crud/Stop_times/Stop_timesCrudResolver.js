"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateStop_timesArgs_1 = require("./args/AggregateStop_timesArgs");
const CreateOneStop_timesArgs_1 = require("./args/CreateOneStop_timesArgs");
const DeleteManyStop_timesArgs_1 = require("./args/DeleteManyStop_timesArgs");
const DeleteOneStop_timesArgs_1 = require("./args/DeleteOneStop_timesArgs");
const FindFirstStop_timesArgs_1 = require("./args/FindFirstStop_timesArgs");
const FindFirstStop_timesOrThrowArgs_1 = require("./args/FindFirstStop_timesOrThrowArgs");
const FindManyStop_timesArgs_1 = require("./args/FindManyStop_timesArgs");
const FindUniqueStop_timesArgs_1 = require("./args/FindUniqueStop_timesArgs");
const FindUniqueStop_timesOrThrowArgs_1 = require("./args/FindUniqueStop_timesOrThrowArgs");
const GroupByStop_timesArgs_1 = require("./args/GroupByStop_timesArgs");
const UpdateManyStop_timesArgs_1 = require("./args/UpdateManyStop_timesArgs");
const UpdateOneStop_timesArgs_1 = require("./args/UpdateOneStop_timesArgs");
const UpsertOneStop_timesArgs_1 = require("./args/UpsertOneStop_timesArgs");
const helpers_1 = require("../../../helpers");
const Stop_times_1 = require("../../../models/Stop_times");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateStop_times_1 = require("../../outputs/AggregateStop_times");
const Stop_timesGroupBy_1 = require("../../outputs/Stop_timesGroupBy");
let Stop_timesCrudResolver = class Stop_timesCrudResolver {
    async aggregateStop_times(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createOneStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstStop_timesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueStop_timesOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByStop_times(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateStop_times_1.AggregateStop_times, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateStop_timesArgs_1.AggregateStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesCrudResolver.prototype, "aggregateStop_times", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stop_times_1.Stop_times, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneStop_timesArgs_1.CreateOneStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesCrudResolver.prototype, "createOneStop_times", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyStop_timesArgs_1.DeleteManyStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesCrudResolver.prototype, "deleteManyStop_times", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stop_times_1.Stop_times, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneStop_timesArgs_1.DeleteOneStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesCrudResolver.prototype, "deleteOneStop_times", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Stop_times_1.Stop_times, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStop_timesArgs_1.FindFirstStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesCrudResolver.prototype, "findFirstStop_times", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Stop_times_1.Stop_times, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStop_timesOrThrowArgs_1.FindFirstStop_timesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesCrudResolver.prototype, "findFirstStop_timesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Stop_times_1.Stop_times], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyStop_timesArgs_1.FindManyStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesCrudResolver.prototype, "findManyStop_times", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Stop_times_1.Stop_times, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStop_timesArgs_1.FindUniqueStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesCrudResolver.prototype, "findUniqueStop_times", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Stop_times_1.Stop_times, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStop_timesOrThrowArgs_1.FindUniqueStop_timesOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesCrudResolver.prototype, "findUniqueStop_timesOrThrow", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Stop_timesGroupBy_1.Stop_timesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByStop_timesArgs_1.GroupByStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesCrudResolver.prototype, "groupByStop_times", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyStop_timesArgs_1.UpdateManyStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesCrudResolver.prototype, "updateManyStop_times", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stop_times_1.Stop_times, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneStop_timesArgs_1.UpdateOneStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesCrudResolver.prototype, "updateOneStop_times", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stop_times_1.Stop_times, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneStop_timesArgs_1.UpsertOneStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Stop_timesCrudResolver.prototype, "upsertOneStop_times", null);
Stop_timesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], Stop_timesCrudResolver);
exports.Stop_timesCrudResolver = Stop_timesCrudResolver;
