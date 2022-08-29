"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsAvgOrderByAggregateInput_1 = require("../inputs/StopsAvgOrderByAggregateInput");
const StopsCountOrderByAggregateInput_1 = require("../inputs/StopsCountOrderByAggregateInput");
const StopsMaxOrderByAggregateInput_1 = require("../inputs/StopsMaxOrderByAggregateInput");
const StopsMinOrderByAggregateInput_1 = require("../inputs/StopsMinOrderByAggregateInput");
const StopsSumOrderByAggregateInput_1 = require("../inputs/StopsSumOrderByAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let StopsOrderByWithAggregationInput = class StopsOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsOrderByWithAggregationInput.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsOrderByWithAggregationInput.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsOrderByWithAggregationInput.prototype, "stop_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCountOrderByAggregateInput_1.StopsCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsCountOrderByAggregateInput_1.StopsCountOrderByAggregateInput)
], StopsOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsAvgOrderByAggregateInput_1.StopsAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsAvgOrderByAggregateInput_1.StopsAvgOrderByAggregateInput)
], StopsOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsMaxOrderByAggregateInput_1.StopsMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsMaxOrderByAggregateInput_1.StopsMaxOrderByAggregateInput)
], StopsOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsMinOrderByAggregateInput_1.StopsMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsMinOrderByAggregateInput_1.StopsMinOrderByAggregateInput)
], StopsOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsSumOrderByAggregateInput_1.StopsSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsSumOrderByAggregateInput_1.StopsSumOrderByAggregateInput)
], StopsOrderByWithAggregationInput.prototype, "_sum", void 0);
StopsOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsOrderByWithAggregationInput", {
        isAbstract: true
    })
], StopsOrderByWithAggregationInput);
exports.StopsOrderByWithAggregationInput = StopsOrderByWithAggregationInput;
