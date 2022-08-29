"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TripsScalarFieldEnum;
(function (TripsScalarFieldEnum) {
    TripsScalarFieldEnum["route_id"] = "route_id";
    TripsScalarFieldEnum["service_id"] = "service_id";
    TripsScalarFieldEnum["trip_id"] = "trip_id";
    TripsScalarFieldEnum["trip_headsign"] = "trip_headsign";
    TripsScalarFieldEnum["start_time"] = "start_time";
    TripsScalarFieldEnum["end_time"] = "end_time";
})(TripsScalarFieldEnum = exports.TripsScalarFieldEnum || (exports.TripsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(TripsScalarFieldEnum, {
    name: "TripsScalarFieldEnum",
    description: undefined,
});
