"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCalendarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstCalendarArgs_1 = require("./args/FindFirstCalendarArgs");
const Calendar_1 = require("../../../models/Calendar");
const helpers_1 = require("../../../helpers");
let FindFirstCalendarResolver = class FindFirstCalendarResolver {
    async findFirstCalendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
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
], FindFirstCalendarResolver.prototype, "findFirstCalendar", null);
FindFirstCalendarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_1.Calendar)
], FindFirstCalendarResolver);
exports.FindFirstCalendarResolver = FindFirstCalendarResolver;
