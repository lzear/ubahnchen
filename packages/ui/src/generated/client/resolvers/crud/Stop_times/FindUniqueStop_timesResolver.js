"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueStop_timesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueStop_timesArgs_1 = require("./args/FindUniqueStop_timesArgs");
const Stop_times_1 = require("../../../models/Stop_times");
const helpers_1 = require("../../../helpers");
let FindUniqueStop_timesResolver = class FindUniqueStop_timesResolver {
    async findUniqueStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Stop_times_1.Stop_times, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStop_timesArgs_1.FindUniqueStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueStop_timesResolver.prototype, "findUniqueStop_times", null);
FindUniqueStop_timesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], FindUniqueStop_timesResolver);
exports.FindUniqueStop_timesResolver = FindUniqueStop_timesResolver;
