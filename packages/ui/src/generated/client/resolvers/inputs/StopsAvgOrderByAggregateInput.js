"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StopsAvgOrderByAggregateInput = class StopsAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsAvgOrderByAggregateInput.prototype, "stop_idx", void 0);
StopsAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsAvgOrderByAggregateInput", {
        isAbstract: true
    })
], StopsAvgOrderByAggregateInput);
exports.StopsAvgOrderByAggregateInput = StopsAvgOrderByAggregateInput;
