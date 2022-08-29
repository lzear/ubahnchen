"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneStop_timesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const CreateOneStop_timesArgs_1 = require("./args/CreateOneStop_timesArgs");
const Stop_times_1 = require("../../../models/Stop_times");
const helpers_1 = require("../../../helpers");
let CreateOneStop_timesResolver = class CreateOneStop_timesResolver {
    async createOneStop_times(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Stop_times_1.Stop_times, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneStop_timesArgs_1.CreateOneStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneStop_timesResolver.prototype, "createOneStop_times", null);
CreateOneStop_timesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], CreateOneStop_timesResolver);
exports.CreateOneStop_timesResolver = CreateOneStop_timesResolver;
