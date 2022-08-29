"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TripsOrderByRelationAggregateInput = class TripsOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsOrderByRelationAggregateInput.prototype, "_count", void 0);
TripsOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsOrderByRelationAggregateInput", {
        isAbstract: true
    })
], TripsOrderByRelationAggregateInput);
exports.TripsOrderByRelationAggregateInput = TripsOrderByRelationAggregateInput;
