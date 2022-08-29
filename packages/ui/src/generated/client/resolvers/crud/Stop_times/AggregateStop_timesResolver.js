"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStop_timesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const AggregateStop_timesArgs_1 = require("./args/AggregateStop_timesArgs");
const Stop_times_1 = require("../../../models/Stop_times");
const AggregateStop_times_1 = require("../../outputs/AggregateStop_times");
const helpers_1 = require("../../../helpers");
let AggregateStop_timesResolver = class AggregateStop_timesResolver {
    async aggregateStop_times(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).stop_times.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateStop_times_1.AggregateStop_times, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateStop_timesArgs_1.AggregateStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateStop_timesResolver.prototype, "aggregateStop_times", null);
AggregateStop_timesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stop_times_1.Stop_times)
], AggregateStop_timesResolver);
exports.AggregateStop_timesResolver = AggregateStop_timesResolver;
