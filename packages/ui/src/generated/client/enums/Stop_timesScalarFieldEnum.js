"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Stop_timesScalarFieldEnum;
(function (Stop_timesScalarFieldEnum) {
    Stop_timesScalarFieldEnum["idx"] = "idx";
    Stop_timesScalarFieldEnum["trip_id"] = "trip_id";
    Stop_timesScalarFieldEnum["arrival_time"] = "arrival_time";
    Stop_timesScalarFieldEnum["departure_time"] = "departure_time";
    Stop_timesScalarFieldEnum["stop_idx"] = "stop_idx";
})(Stop_timesScalarFieldEnum = exports.Stop_timesScalarFieldEnum || (exports.Stop_timesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(Stop_timesScalarFieldEnum, {
    name: "Stop_timesScalarFieldEnum",
    description: undefined,
});
