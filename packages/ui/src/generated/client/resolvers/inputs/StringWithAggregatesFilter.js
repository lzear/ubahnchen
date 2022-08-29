"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const NestedStringFilter_1 = require("../inputs/NestedStringFilter");
const NestedStringWithAggregatesFilter_1 = require("../inputs/NestedStringWithAggregatesFilter");
let StringWithAggregatesFilter = class StringWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StringWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StringWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "contains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "startsWith", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StringWithAggregatesFilter.prototype, "endsWith", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringWithAggregatesFilter_1.NestedStringWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringWithAggregatesFilter_1.NestedStringWithAggregatesFilter)
], StringWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], StringWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringFilter_1.NestedStringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringFilter_1.NestedStringFilter)
], StringWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringFilter_1.NestedStringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringFilter_1.NestedStringFilter)
], StringWithAggregatesFilter.prototype, "_max", void 0);
StringWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("StringWithAggregatesFilter", {
        isAbstract: true
    })
], StringWithAggregatesFilter);
exports.StringWithAggregatesFilter = StringWithAggregatesFilter;
