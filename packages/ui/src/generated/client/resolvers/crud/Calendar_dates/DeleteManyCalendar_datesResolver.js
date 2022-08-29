"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCalendar_datesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyCalendar_datesArgs_1 = require("./args/DeleteManyCalendar_datesArgs");
const Calendar_dates_1 = require("../../../models/Calendar_dates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCalendar_datesResolver = class DeleteManyCalendar_datesResolver {
    async deleteManyCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCalendar_datesArgs_1.DeleteManyCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCalendar_datesResolver.prototype, "deleteManyCalendar_dates", null);
DeleteManyCalendar_datesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_dates_1.Calendar_dates)
], DeleteManyCalendar_datesResolver);
exports.DeleteManyCalendar_datesResolver = DeleteManyCalendar_datesResolver;
