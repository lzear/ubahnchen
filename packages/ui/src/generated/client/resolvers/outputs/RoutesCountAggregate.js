"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoutesCountAggregate = class RoutesCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RoutesCountAggregate.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RoutesCountAggregate.prototype, "route_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], RoutesCountAggregate.prototype, "_all", void 0);
RoutesCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoutesCountAggregate", {
        isAbstract: true
    })
], RoutesCountAggregate);
exports.RoutesCountAggregate = RoutesCountAggregate;
