"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesOrderByRelationAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Stop_timesOrderByRelationAggregateInput = class Stop_timesOrderByRelationAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesOrderByRelationAggregateInput.prototype, "_count", void 0);
Stop_timesOrderByRelationAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesOrderByRelationAggregateInput", {
        isAbstract: true
    })
], Stop_timesOrderByRelationAggregateInput);
exports.Stop_timesOrderByRelationAggregateInput = Stop_timesOrderByRelationAggregateInput;
