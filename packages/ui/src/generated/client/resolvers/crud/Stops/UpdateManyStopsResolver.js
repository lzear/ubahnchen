"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyStopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UpdateManyStopsArgs_1 = require("./args/UpdateManyStopsArgs");
const Stops_1 = require("../../../models/Stops");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let UpdateManyStopsResolver = class UpdateManyStopsResolver {
    async updateManyStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateManyStopsArgs_1.UpdateManyStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateManyStopsResolver.prototype, "updateManyStops", null);
UpdateManyStopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stops_1.Stops)
], UpdateManyStopsResolver);
exports.UpdateManyStopsResolver = UpdateManyStopsResolver;
