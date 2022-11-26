"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneStopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateOneStopsArgs_1 = require("./args/UpdateOneStopsArgs");
const Stops_1 = require("../../../models/Stops");
const helpers_1 = require("../../../helpers");
let UpdateOneStopsResolver = class UpdateOneStopsResolver {
    async updateOneStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stops_1.Stops, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateOneStopsArgs_1.UpdateOneStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOneStopsResolver.prototype, "updateOneStops", null);
UpdateOneStopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stops_1.Stops)
], UpdateOneStopsResolver);
exports.UpdateOneStopsResolver = UpdateOneStopsResolver;
