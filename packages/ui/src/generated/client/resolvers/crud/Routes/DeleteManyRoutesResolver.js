"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRoutesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteManyRoutesArgs_1 = require("./args/DeleteManyRoutesArgs");
const Routes_1 = require("../../../models/Routes");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let DeleteManyRoutesResolver = class DeleteManyRoutesResolver {
    async deleteManyRoutes(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).routes.deleteMany({
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
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteManyRoutesArgs_1.DeleteManyRoutesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteManyRoutesResolver.prototype, "deleteManyRoutes", null);
DeleteManyRoutesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Routes_1.Routes)
], DeleteManyRoutesResolver);
exports.DeleteManyRoutesResolver = DeleteManyRoutesResolver;
