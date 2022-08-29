"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateStopsArgs_1 = require("./args/AggregateStopsArgs");
const Stops_1 = require("../../../models/Stops");
const AggregateStops_1 = require("../../outputs/AggregateStops");
const helpers_1 = require("../../../helpers");
let AggregateStopsResolver = class AggregateStopsResolver {
    async aggregateStops(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateStops_1.AggregateStops, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateStopsArgs_1.AggregateStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateStopsResolver.prototype, "aggregateStops", null);
AggregateStopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stops_1.Stops)
], AggregateStopsResolver);
exports.AggregateStopsResolver = AggregateStopsResolver;
