"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCalendar_datesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyCalendar_datesArgs_1 = require("./args/UpdateManyCalendar_datesArgs");
const Calendar_dates_1 = require("../../../models/Calendar_dates");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCalendar_datesResolver = class UpdateManyCalendar_datesResolver {
    async updateManyCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCalendar_datesArgs_1.UpdateManyCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCalendar_datesResolver.prototype, "updateManyCalendar_dates", null);
UpdateManyCalendar_datesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_dates_1.Calendar_dates)
], UpdateManyCalendar_datesResolver);
exports.UpdateManyCalendar_datesResolver = UpdateManyCalendar_datesResolver;
