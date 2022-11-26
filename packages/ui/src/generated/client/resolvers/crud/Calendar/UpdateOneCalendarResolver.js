"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneCalendarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneCalendarArgs_1 = require("./args/UpdateOneCalendarArgs");
const Calendar_1 = require("../../../models/Calendar");
const helpers_1 = require("../../../helpers");
let UpdateOneCalendarResolver = class UpdateOneCalendarResolver {
    async updateOneCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.update({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneCalendarArgs_1.UpdateOneCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneCalendarResolver.prototype, "updateOneCalendar", null);
UpdateOneCalendarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_1.Calendar)
], UpdateOneCalendarResolver);
exports.UpdateOneCalendarResolver = UpdateOneCalendarResolver;
