"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortOrder = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
TypeGraphQL.registerEnumType(SortOrder, {
    name: "SortOrder",
    description: undefined,
});
