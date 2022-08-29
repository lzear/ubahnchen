"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StopsSumOrderByAggregateInput = class StopsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsSumOrderByAggregateInput.prototype, "stop_idx", void 0);
StopsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsSumOrderByAggregateInput", {
        isAbstract: true
    })
], StopsSumOrderByAggregateInput);
exports.StopsSumOrderByAggregateInput = StopsSumOrderByAggregateInput;
