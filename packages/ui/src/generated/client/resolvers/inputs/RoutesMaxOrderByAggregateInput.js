"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RoutesMaxOrderByAggregateInput = class RoutesMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesMaxOrderByAggregateInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesMaxOrderByAggregateInput.prototype, "route_name", void 0);
RoutesMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesMaxOrderByAggregateInput", {
        isAbstract: true
    })
], RoutesMaxOrderByAggregateInput);
exports.RoutesMaxOrderByAggregateInput = RoutesMaxOrderByAggregateInput;
