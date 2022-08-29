"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCalendarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueCalendarArgs_1 = require("./args/FindUniqueCalendarArgs");
const Calendar_1 = require("../../../models/Calendar");
const helpers_1 = require("../../../helpers");
let FindUniqueCalendarResolver = class FindUniqueCalendarResolver {
    async calendar(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueCalendarArgs_1.FindUniqueCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueCalendarResolver.prototype, "calendar", null);
FindUniqueCalendarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_1.Calendar)
], FindUniqueCalendarResolver);
exports.FindUniqueCalendarResolver = FindUniqueCalendarResolver;
