"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RoutesMinOrderByAggregateInput = class RoutesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesMinOrderByAggregateInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesMinOrderByAggregateInput.prototype, "route_name", void 0);
RoutesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesMinOrderByAggregateInput", {
        isAbstract: true
    })
], RoutesMinOrderByAggregateInput);
exports.RoutesMinOrderByAggregateInput = RoutesMinOrderByAggregateInput;
