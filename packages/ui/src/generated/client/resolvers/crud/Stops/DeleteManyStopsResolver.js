"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyStopsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyStopsArgs_1 = require("./args/DeleteManyStopsArgs");
const Stops_1 = require("../../../models/Stops");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyStopsResolver = class DeleteManyStopsResolver {
    async deleteManyStops(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyStopsArgs_1.DeleteManyStopsArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyStopsResolver.prototype, "deleteManyStops", null);
DeleteManyStopsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stops_1.Stops)
], DeleteManyStopsResolver);
exports.DeleteManyStopsResolver = DeleteManyStopsResolver;
