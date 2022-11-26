"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyStopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindManyStopsArgs_1 = require("./args/FindManyStopsArgs");
const Stops_1 = require("../../../models/Stops");
const helpers_1 = require("../../../helpers");
let FindManyStopsResolver = class FindManyStopsResolver {
    async findManyStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Stops_1.Stops], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyStopsArgs_1.FindManyStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyStopsResolver.prototype, "findManyStops", null);
FindManyStopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stops_1.Stops)
], FindManyStopsResolver);
exports.FindManyStopsResolver = FindManyStopsResolver;
