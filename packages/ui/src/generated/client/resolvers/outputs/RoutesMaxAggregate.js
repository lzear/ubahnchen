"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoutesMaxAggregate = class RoutesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesMaxAggregate.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesMaxAggregate.prototype, "route_name", void 0);
RoutesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoutesMaxAggregate", {
        isAbstract: true
    })
], RoutesMaxAggregate);
exports.RoutesMaxAggregate = RoutesMaxAggregate;
