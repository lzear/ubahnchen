"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCalendarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteManyCalendarArgs_1 = require("./args/DeleteManyCalendarArgs");
const Calendar_1 = require("../../../models/Calendar");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyCalendarResolver = class DeleteManyCalendarResolver {
    async deleteManyCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyCalendarArgs_1.DeleteManyCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyCalendarResolver.prototype, "deleteManyCalendar", null);
DeleteManyCalendarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_1.Calendar)
], DeleteManyCalendarResolver);
exports.DeleteManyCalendarResolver = DeleteManyCalendarResolver;
