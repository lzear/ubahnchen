"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesOrderByRelationAggregateInput_1 = require("../inputs/Stop_timesOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let StopsOrderByWithRelationInput = class StopsOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsOrderByWithRelationInput.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsOrderByWithRelationInput.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsOrderByWithRelationInput.prototype, "stop_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesOrderByRelationAggregateInput_1.Stop_timesOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesOrderByRelationAggregateInput_1.Stop_timesOrderByRelationAggregateInput)
], StopsOrderByWithRelationInput.prototype, "stop_times", void 0);
StopsOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsOrderByWithRelationInput", {
        isAbstract: true
    })
], StopsOrderByWithRelationInput);
exports.StopsOrderByWithRelationInput = StopsOrderByWithRelationInput;
