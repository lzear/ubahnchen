"use strict";
var NestedIntFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestedIntFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let NestedIntFilter = NestedIntFilter_1 = class NestedIntFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedIntFilter.prototype, "equals", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedIntFilter.prototype, "in", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], NestedIntFilter.prototype, "notIn", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedIntFilter.prototype, "lt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedIntFilter.prototype, "lte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedIntFilter.prototype, "gt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], NestedIntFilter.prototype, "gte", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NestedIntFilter_1, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NestedIntFilter)
], NestedIntFilter.prototype, "not", void 0);
NestedIntFilter = NestedIntFilter_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("NestedIntFilter", {
        isAbstract: true
    })
], NestedIntFilter);
exports.NestedIntFilter = NestedIntFilter;
