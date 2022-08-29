"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntWithAggregatesFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NestedFloatFilter_1 = require("../inputs/NestedFloatFilter");
const NestedIntFilter_1 = require("../inputs/NestedIntFilter");
const NestedIntWithAggregatesFilter_1 = require("../inputs/NestedIntWithAggregatesFilter");
let IntWithAggregatesFilter = class IntWithAggregatesFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IntWithAggregatesFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IntWithAggregatesFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], IntWithAggregatesFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IntWithAggregatesFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IntWithAggregatesFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IntWithAggregatesFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], IntWithAggregatesFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntWithAggregatesFilter_1.NestedIntWithAggregatesFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntWithAggregatesFilter_1.NestedIntWithAggregatesFilter)
], IntWithAggregatesFilter.prototype, "not", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], IntWithAggregatesFilter.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatFilter_1.NestedFloatFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatFilter_1.NestedFloatFilter)
], IntWithAggregatesFilter.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], IntWithAggregatesFilter.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], IntWithAggregatesFilter.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1.NestedIntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter_1.NestedIntFilter)
], IntWithAggregatesFilter.prototype, "_max", void 0);
IntWithAggregatesFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("IntWithAggregatesFilter", {
        isAbstract: true
    })
], IntWithAggregatesFilter);
exports.IntWithAggregatesFilter = IntWithAggregatesFilter;
