"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneCalendar_datesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpsertOneCalendar_datesArgs_1 = require("./args/UpsertOneCalendar_datesArgs");
const Calendar_dates_1 = require("../../../models/Calendar_dates");
const helpers_1 = require("../../../helpers");
let UpsertOneCalendar_datesResolver = class UpsertOneCalendar_datesResolver {
    async upsertOneCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], UpsertOneCalendar_datesResolver.prototype, "upsertOneCalendar_dates", null);
UpsertOneCalendar_datesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_dates_1.Calendar_dates)
], UpsertOneCalendar_datesResolver);
exports.UpsertOneCalendar_datesResolver = UpsertOneCalendar_datesResolver;
