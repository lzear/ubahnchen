"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarCrudResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateCalendarArgs_1 = require("./args/AggregateCalendarArgs");
const CreateOneCalendarArgs_1 = require("./args/CreateOneCalendarArgs");
const DeleteManyCalendarArgs_1 = require("./args/DeleteManyCalendarArgs");
const DeleteOneCalendarArgs_1 = require("./args/DeleteOneCalendarArgs");
const FindFirstCalendarArgs_1 = require("./args/FindFirstCalendarArgs");
const FindManyCalendarArgs_1 = require("./args/FindManyCalendarArgs");
const FindUniqueCalendarArgs_1 = require("./args/FindUniqueCalendarArgs");
const GroupByCalendarArgs_1 = require("./args/GroupByCalendarArgs");
const UpdateManyCalendarArgs_1 = require("./args/UpdateManyCalendarArgs");
const UpdateOneCalendarArgs_1 = require("./args/UpdateOneCalendarArgs");
const UpsertOneCalendarArgs_1 = require("./args/UpsertOneCalendarArgs");
const helpers_1 = require("../../../helpers");
const Calendar_1 = require("../../../models/Calendar");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateCalendar_1 = require("../../outputs/AggregateCalendar");
const CalendarGroupBy_1 = require("../../outputs/CalendarGroupBy");
let CalendarCrudResolver = class CalendarCrudResolver {
    async aggregateCalendar(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
    async createOneCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async calendars(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async calendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByCalendar(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCalendar_1.AggregateCalendar, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCalendarArgs_1.AggregateCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CalendarCrudResolver.prototype, "aggregateCalendar", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Calendar_1.Calendar, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCalendarArgs_1.CreateOneCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CalendarCrudResolver.prototype, "createOneCalendar", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCalendarArgs_1.DeleteManyCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CalendarCrudResolver.prototype, "deleteManyCalendar", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Calendar_1.Calendar, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteOneCalendarArgs_1.DeleteOneCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CalendarCrudResolver.prototype, "deleteOneCalendar", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Calendar_1.Calendar, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstCalendarArgs_1.FindFirstCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CalendarCrudResolver.prototype, "findFirstCalendar", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Calendar_1.Calendar], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyCalendarArgs_1.FindManyCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CalendarCrudResolver.prototype, "calendars", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Calendar_1.Calendar, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCalendarArgs_1.FindUniqueCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CalendarCrudResolver.prototype, "calendar", null);
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [CalendarGroupBy_1.CalendarGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByCalendarArgs_1.GroupByCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CalendarCrudResolver.prototype, "groupByCalendar", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCalendarArgs_1.UpdateManyCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CalendarCrudResolver.prototype, "updateManyCalendar", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Calendar_1.Calendar, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCalendarArgs_1.UpdateOneCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CalendarCrudResolver.prototype, "updateOneCalendar", null);
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Calendar_1.Calendar, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneCalendarArgs_1.UpsertOneCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CalendarCrudResolver.prototype, "upsertOneCalendar", null);
CalendarCrudResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_1.Calendar)
], CalendarCrudResolver);
exports.CalendarCrudResolver = CalendarCrudResolver;
