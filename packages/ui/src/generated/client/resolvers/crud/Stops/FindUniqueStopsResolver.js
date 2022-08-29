"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueStopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueStopsArgs_1 = require("./args/FindUniqueStopsArgs");
const Stops_1 = require("../../../models/Stops");
const helpers_1 = require("../../../helpers");
let FindUniqueStopsResolver = class FindUniqueStopsResolver {
    async findUniqueStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.findUnique({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStopsArgs_1.FindUniqueStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueStopsResolver.prototype, "findUniqueStops", null);
FindUniqueStopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stops_1.Stops)
], FindUniqueStopsResolver);
exports.FindUniqueStopsResolver = FindUniqueStopsResolver;
