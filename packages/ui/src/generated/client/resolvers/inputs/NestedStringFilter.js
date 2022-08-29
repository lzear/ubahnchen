"use strict";
var NestedStringFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedStringFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NestedStringFilter = NestedStringFilter_1 = class NestedStringFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedStringFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedStringFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringFilter.prototype, "contains", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringFilter.prototype, "startsWith", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], NestedStringFilter.prototype, "endsWith", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedStringFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedStringFilter)
], NestedStringFilter.prototype, "not", void 0);
NestedStringFilter = NestedStringFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedStringFilter", {
        isAbstract: true
    })
], NestedStringFilter);
exports.NestedStringFilter = NestedStringFilter;
