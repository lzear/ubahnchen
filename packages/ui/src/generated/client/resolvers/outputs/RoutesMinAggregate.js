"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoutesMinAggregate = class RoutesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesMinAggregate.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesMinAggregate.prototype, "route_name", void 0);
RoutesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoutesMinAggregate", {
        isAbstract: true
    })
], RoutesMinAggregate);
exports.RoutesMinAggregate = RoutesMinAggregate;
