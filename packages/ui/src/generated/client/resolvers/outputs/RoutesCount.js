"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoutesCount = class RoutesCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RoutesCount.prototype, "trips", void 0);
RoutesCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoutesCount", {
        isAbstract: true
    })
], RoutesCount);
exports.RoutesCount = RoutesCount;
