"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var RoutesScalarFieldEnum;
(function (RoutesScalarFieldEnum) {
    RoutesScalarFieldEnum["route_id"] = "route_id";
    RoutesScalarFieldEnum["route_name"] = "route_name";
})(RoutesScalarFieldEnum = exports.RoutesScalarFieldEnum || (exports.RoutesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(RoutesScalarFieldEnum, {
    name: "RoutesScalarFieldEnum",
    description: undefined,
});
