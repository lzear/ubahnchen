"use strict";
var NestedStringWithAggregatesFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedStringWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const NestedStringFilter_1 = require("../inputs/NestedStringFilter");
let NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = class NestedStringWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedStringWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedStringWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "contains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "startsWith", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringWithAggregatesFilter.prototype, "endsWith", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringWithAggregatesFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringWithAggregatesFilter)
], NestedStringWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], NestedStringWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringFilter_1.NestedStringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringFilter_1.NestedStringFilter)
], NestedStringWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringFilter_1.NestedStringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringFilter_1.NestedStringFilter)
], NestedStringWithAggregatesFilter.prototype, "_max", void 0);
NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedStringWithAggregatesFilter", {
        isAbstract: true
    })
], NestedStringWithAggregatesFilter);
exports.NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter;
