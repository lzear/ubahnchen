"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesCountOrderByAggregateInput_1 = require("../inputs/RoutesCountOrderByAggregateInput");
const RoutesMaxOrderByAggregateInput_1 = require("../inputs/RoutesMaxOrderByAggregateInput");
const RoutesMinOrderByAggregateInput_1 = require("../inputs/RoutesMinOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let RoutesOrderByWithAggregationInput = class RoutesOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesOrderByWithAggregationInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesOrderByWithAggregationInput.prototype, "route_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesCountOrderByAggregateInput_1.RoutesCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesCountOrderByAggregateInput_1.RoutesCountOrderByAggregateInput)
], RoutesOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesMaxOrderByAggregateInput_1.RoutesMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesMaxOrderByAggregateInput_1.RoutesMaxOrderByAggregateInput)
], RoutesOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesMinOrderByAggregateInput_1.RoutesMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesMinOrderByAggregateInput_1.RoutesMinOrderByAggregateInput)
], RoutesOrderByWithAggregationInput.prototype, "_min", void 0);
RoutesOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesOrderByWithAggregationInput", {
        isAbstract: true
    })
], RoutesOrderByWithAggregationInput);
exports.RoutesOrderByWithAggregationInput = RoutesOrderByWithAggregationInput;
