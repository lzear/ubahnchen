"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueStopsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindUniqueStopsOrThrowArgs_1 = require("./args/FindUniqueStopsOrThrowArgs");
const Stops_1 = require("../../../models/Stops");
const helpers_1 = require("../../../helpers");
let FindUniqueStopsOrThrowResolver = class FindUniqueStopsOrThrowResolver {
    async findUniqueStopsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.findUniqueOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueStopsOrThrowArgs_1.FindUniqueStopsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueStopsOrThrowResolver.prototype, "findUniqueStopsOrThrow", null);
FindUniqueStopsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stops_1.Stops)
], FindUniqueStopsOrThrowResolver);
exports.FindUniqueStopsOrThrowResolver = FindUniqueStopsOrThrowResolver;
