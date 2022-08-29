"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyCalendarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateManyCalendarArgs_1 = require("./args/UpdateManyCalendarArgs");
const Calendar_1 = require("../../../models/Calendar");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyCalendarResolver = class UpdateManyCalendarResolver {
    async updateManyCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.updateMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyCalendarArgs_1.UpdateManyCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyCalendarResolver.prototype, "updateManyCalendar", null);
UpdateManyCalendarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_1.Calendar)
], UpdateManyCalendarResolver);
exports.UpdateManyCalendarResolver = UpdateManyCalendarResolver;
