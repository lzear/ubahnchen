"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstStopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindFirstStopsArgs_1 = require("./args/FindFirstStopsArgs");
const Stops_1 = require("../../../models/Stops");
const helpers_1 = require("../../../helpers");
let FindFirstStopsResolver = class FindFirstStopsResolver {
    async findFirstStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Stops_1.Stops, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStopsArgs_1.FindFirstStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstStopsResolver.prototype, "findFirstStops", null);
FindFirstStopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stops_1.Stops)
], FindFirstStopsResolver);
exports.FindFirstStopsResolver = FindFirstStopsResolver;
