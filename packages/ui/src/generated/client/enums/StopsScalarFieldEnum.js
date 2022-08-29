"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var StopsScalarFieldEnum;
(function (StopsScalarFieldEnum) {
    StopsScalarFieldEnum["stop_idx"] = "stop_idx";
    StopsScalarFieldEnum["stop_id"] = "stop_id";
    StopsScalarFieldEnum["stop_name"] = "stop_name";
})(StopsScalarFieldEnum = exports.StopsScalarFieldEnum || (exports.StopsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(StopsScalarFieldEnum, {
    name: "StopsScalarFieldEnum",
    description: undefined,
});
