"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCalendarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneCalendarArgs_1 = require("./args/UpsertOneCalendarArgs");
const Calendar_1 = require("../../../models/Calendar");
const helpers_1 = require("../../../helpers");
let UpsertOneCalendarResolver = class UpsertOneCalendarResolver {
    async upsertOneCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertOneCalendarResolver.prototype, "upsertOneCalendar", null);
UpsertOneCalendarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_1.Calendar)
], UpsertOneCalendarResolver);
exports.UpsertOneCalendarResolver = UpsertOneCalendarResolver;
