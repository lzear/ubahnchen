"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_times_1 = require("../../../models/Stop_times");
const Stops_1 = require("../../../models/Stops");
const StopsStop_timesArgs_1 = require("./args/StopsStop_timesArgs");
const helpers_1 = require("../../../helpers");
let StopsRelationsResolver = class StopsRelationsResolver {
    async stop_times(stops, ctx, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).stops.findUnique({
            where: {
                stop_idx: stops.stop_idx,
            },
        }).stop_times(args);
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => [Stop_times_1.Stop_times], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Stops_1.Stops, Object, StopsStop_timesArgs_1.StopsStop_timesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], StopsRelationsResolver.prototype, "stop_times", null);
StopsRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Stops_1.Stops)
], StopsRelationsResolver);
exports.StopsRelationsResolver = StopsRelationsResolver;
