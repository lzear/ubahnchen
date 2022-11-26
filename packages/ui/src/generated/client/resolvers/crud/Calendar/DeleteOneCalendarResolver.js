"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneCalendarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const DeleteOneCalendarArgs_1 = require("./args/DeleteOneCalendarArgs");
const Calendar_1 = require("../../../models/Calendar");
const helpers_1 = require("../../../helpers");
let DeleteOneCalendarResolver = class DeleteOneCalendarResolver {
    async deleteOneCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], DeleteOneCalendarResolver.prototype, "deleteOneCalendar", null);
DeleteOneCalendarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_1.Calendar)
], DeleteOneCalendarResolver);
exports.DeleteOneCalendarResolver = DeleteOneCalendarResolver;
