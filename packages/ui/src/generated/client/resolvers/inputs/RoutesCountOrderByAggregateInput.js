"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let RoutesCountOrderByAggregateInput = class RoutesCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesCountOrderByAggregateInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesCountOrderByAggregateInput.prototype, "route_name", void 0);
RoutesCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesCountOrderByAggregateInput", {
        isAbstract: true
    })
], RoutesCountOrderByAggregateInput);
exports.RoutesCountOrderByAggregateInput = RoutesCountOrderByAggregateInput;
