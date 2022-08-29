"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionIsolationLevel = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TransactionIsolationLevel;
(function (TransactionIsolationLevel) {
    TransactionIsolationLevel["Serializable"] = "Serializable";
})(TransactionIsolationLevel = exports.TransactionIsolationLevel || (exports.TransactionIsolationLevel = {}));
TypeGraphQL.registerEnumType(TransactionIsolationLevel, {
    name: "TransactionIsolationLevel",
    description: undefined,
});
