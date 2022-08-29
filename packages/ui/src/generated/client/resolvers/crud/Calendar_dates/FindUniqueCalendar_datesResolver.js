"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCalendar_datesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueCalendar_datesArgs_1 = require("./args/FindUniqueCalendar_datesArgs");
const Calendar_dates_1 = require("../../../models/Calendar_dates");
const helpers_1 = require("../../../helpers");
let FindUniqueCalendar_datesResolver = class FindUniqueCalendar_datesResolver {
    async findUniqueCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Calendar_dates_1.Calendar_dates, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCalendar_datesArgs_1.FindUniqueCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCalendar_datesResolver.prototype, "findUniqueCalendar_dates", null);
FindUniqueCalendar_datesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_dates_1.Calendar_dates)
], FindUniqueCalendar_datesResolver);
exports.FindUniqueCalendar_datesResolver = FindUniqueCalendar_datesResolver;
