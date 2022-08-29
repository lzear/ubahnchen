"use strict";
var NestedFloatFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedFloatFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NestedFloatFilter = NestedFloatFilter_1 = class NestedFloatFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedFloatFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Float], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedFloatFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedFloatFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedFloatFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedFloatFilter)
], NestedFloatFilter.prototype, "not", void 0);
NestedFloatFilter = NestedFloatFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedFloatFilter", {
        isAbstract: true
    })
], NestedFloatFilter);
exports.NestedFloatFilter = NestedFloatFilter;
