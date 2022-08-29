"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let StopsMaxOrderByAggregateInput = class StopsMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsMaxOrderByAggregateInput.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsMaxOrderByAggregateInput.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsMaxOrderByAggregateInput.prototype, "stop_name", void 0);
StopsMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsMaxOrderByAggregateInput", {
        isAbstract: true
    })
], StopsMaxOrderByAggregateInput);
exports.StopsMaxOrderByAggregateInput = StopsMaxOrderByAggregateInput;
