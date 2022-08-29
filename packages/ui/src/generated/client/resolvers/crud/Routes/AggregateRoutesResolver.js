"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateRoutesArgs_1 = require("./args/AggregateRoutesArgs");
const Routes_1 = require("../../../models/Routes");
const AggregateRoutes_1 = require("../../outputs/AggregateRoutes");
const helpers_1 = require("../../../helpers");
let AggregateRoutesResolver = class AggregateRoutesResolver {
    async aggregateRoutes(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateRoutes_1.AggregateRoutes, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateRoutesArgs_1.AggregateRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateRoutesResolver.prototype, "aggregateRoutes", null);
AggregateRoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Routes_1.Routes)
], AggregateRoutesResolver);
exports.AggregateRoutesResolver = AggregateRoutesResolver;
