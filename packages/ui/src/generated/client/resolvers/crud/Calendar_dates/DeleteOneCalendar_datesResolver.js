"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCalendar_datesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteOneCalendar_datesArgs_1 = require("./args/DeleteOneCalendar_datesArgs");
const Calendar_dates_1 = require("../../../models/Calendar_dates");
const helpers_1 = require("../../../helpers");
let DeleteOneCalendar_datesResolver = class DeleteOneCalendar_datesResolver {
    async deleteOneCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteOneCalendar_datesResolver.prototype, "deleteOneCalendar_dates", null);
DeleteOneCalendar_datesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_dates_1.Calendar_dates)
], DeleteOneCalendar_datesResolver);
exports.DeleteOneCalendar_datesResolver = DeleteOneCalendar_datesResolver;
