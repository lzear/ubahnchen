"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsCountOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StopsCountOrderByAggregateInput = class StopsCountOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsCountOrderByAggregateInput.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsCountOrderByAggregateInput.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsCountOrderByAggregateInput.prototype, "stop_name", void 0);
StopsCountOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsCountOrderByAggregateInput", {
        isAbstract: true
    })
], StopsCountOrderByAggregateInput);
exports.StopsCountOrderByAggregateInput = StopsCountOrderByAggregateInput;
