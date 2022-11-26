"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneStopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpsertOneStopsArgs_1 = require("./args/UpsertOneStopsArgs");
const Stops_1 = require("../../../models/Stops");
const helpers_1 = require("../../../helpers");
let UpsertOneStopsResolver = class UpsertOneStopsResolver {
    async upsertOneStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stops_1.Stops, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpsertOneStopsArgs_1.UpsertOneStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpsertOneStopsResolver.prototype, "upsertOneStops", null);
UpsertOneStopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stops_1.Stops)
], UpsertOneStopsResolver);
exports.UpsertOneStopsResolver = UpsertOneStopsResolver;
