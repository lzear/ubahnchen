"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesCountAggregate_1 = require("../outputs/RoutesCountAggregate");
const RoutesMaxAggregate_1 = require("../outputs/RoutesMaxAggregate");
const RoutesMinAggregate_1 = require("../outputs/RoutesMinAggregate");
let RoutesGroupBy = class RoutesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoutesGroupBy.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RoutesGroupBy.prototype, "route_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesCountAggregate_1.RoutesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesCountAggregate_1.RoutesCountAggregate)
], RoutesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesMinAggregate_1.RoutesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesMinAggregate_1.RoutesMinAggregate)
], RoutesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesMaxAggregate_1.RoutesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesMaxAggregate_1.RoutesMaxAggregate)
], RoutesGroupBy.prototype, "_max", void 0);
RoutesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RoutesGroupBy", {
        isAbstract: true
    })
], RoutesGroupBy);
exports.RoutesGroupBy = RoutesGroupBy;
