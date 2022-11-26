"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstStopsOrThrowResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FindFirstStopsOrThrowArgs_1 = require("./args/FindFirstStopsOrThrowArgs");
const Stops_1 = require("../../../models/Stops");
const helpers_1 = require("../../../helpers");
let FindFirstStopsOrThrowResolver = class FindFirstStopsOrThrowResolver {
    async findFirstStopsOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.findFirstOrThrow({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindFirstStopsOrThrowArgs_1.FindFirstStopsOrThrowArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstStopsOrThrowResolver.prototype, "findFirstStopsOrThrow", null);
FindFirstStopsOrThrowResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stops_1.Stops)
], FindFirstStopsOrThrowResolver);
exports.FindFirstStopsOrThrowResolver = FindFirstStopsOrThrowResolver;
