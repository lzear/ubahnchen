"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StopsMinOrderByAggregateInput = class StopsMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsMinOrderByAggregateInput.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsMinOrderByAggregateInput.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsMinOrderByAggregateInput.prototype, "stop_name", void 0);
StopsMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsMinOrderByAggregateInput", {
        isAbstract: true
    })
], StopsMinOrderByAggregateInput);
exports.StopsMinOrderByAggregateInput = StopsMinOrderByAggregateInput;
