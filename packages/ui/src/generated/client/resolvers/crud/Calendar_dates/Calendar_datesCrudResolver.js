"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCalendar_datesArgs_1 = require("./args/AggregateCalendar_datesArgs");
const CreateOneCalendar_datesArgs_1 = require("./args/CreateOneCalendar_datesArgs");
const DeleteManyCalendar_datesArgs_1 = require("./args/DeleteManyCalendar_datesArgs");
const DeleteOneCalendar_datesArgs_1 = require("./args/DeleteOneCalendar_datesArgs");
const FindFirstCalendar_datesArgs_1 = require("./args/FindFirstCalendar_datesArgs");
const FindManyCalendar_datesArgs_1 = require("./args/FindManyCalendar_datesArgs");
const FindUniqueCalendar_datesArgs_1 = require("./args/FindUniqueCalendar_datesArgs");
const GroupByCalendar_datesArgs_1 = require("./args/GroupByCalendar_datesArgs");
const UpdateManyCalendar_datesArgs_1 = require("./args/UpdateManyCalendar_datesArgs");
const UpdateOneCalendar_datesArgs_1 = require("./args/UpdateOneCalendar_datesArgs");
const UpsertOneCalendar_datesArgs_1 = require("./args/UpsertOneCalendar_datesArgs");
const helpers_1 = require("../../../helpers");
const Calendar_dates_1 = require("../../../models/Calendar_dates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCalendar_dates_1 = require("../../outputs/AggregateCalendar_dates");
const Calendar_datesGroupBy_1 = require("../../outputs/Calendar_datesGroupBy");
let Calendar_datesCrudResolver = class Calendar_datesCrudResolver {
    async aggregateCalendar_dates(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOneCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findManyCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findUniqueCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCalendar_dates(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCalendar_dates_1.AggregateCalendar_dates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCalendar_datesArgs_1.AggregateCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Calendar_datesCrudResolver.prototype, "aggregateCalendar_dates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Calendar_dates_1.Calendar_dates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCalendar_datesArgs_1.CreateOneCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Calendar_datesCrudResolver.prototype, "createOneCalendar_dates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCalendar_datesArgs_1.DeleteManyCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Calendar_datesCrudResolver.prototype, "deleteManyCalendar_dates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Calendar_dates_1.Calendar_dates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCalendar_datesArgs_1.DeleteOneCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Calendar_datesCrudResolver.prototype, "deleteOneCalendar_dates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Calendar_dates_1.Calendar_dates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCalendar_datesArgs_1.FindFirstCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Calendar_datesCrudResolver.prototype, "findFirstCalendar_dates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Calendar_dates_1.Calendar_dates], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCalendar_datesArgs_1.FindManyCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Calendar_datesCrudResolver.prototype, "findManyCalendar_dates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Calendar_dates_1.Calendar_dates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCalendar_datesArgs_1.FindUniqueCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Calendar_datesCrudResolver.prototype, "findUniqueCalendar_dates", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Calendar_datesGroupBy_1.Calendar_datesGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCalendar_datesArgs_1.GroupByCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Calendar_datesCrudResolver.prototype, "groupByCalendar_dates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCalendar_datesArgs_1.UpdateManyCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Calendar_datesCrudResolver.prototype, "updateManyCalendar_dates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Calendar_dates_1.Calendar_dates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCalendar_datesArgs_1.UpdateOneCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Calendar_datesCrudResolver.prototype, "updateOneCalendar_dates", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Calendar_dates_1.Calendar_dates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCalendar_datesArgs_1.UpsertOneCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], Calendar_datesCrudResolver.prototype, "upsertOneCalendar_dates", null);
Calendar_datesCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_dates_1.Calendar_dates)
], Calendar_datesCrudResolver);
exports.Calendar_datesCrudResolver = Calendar_datesCrudResolver;
