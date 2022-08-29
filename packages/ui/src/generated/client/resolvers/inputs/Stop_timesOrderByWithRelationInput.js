"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsOrderByWithRelationInput_1 = require("../inputs/StopsOrderByWithRelationInput");
const TripsOrderByWithRelationInput_1 = require("../inputs/TripsOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let Stop_timesOrderByWithRelationInput = class Stop_timesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesOrderByWithRelationInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesOrderByWithRelationInput.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesOrderByWithRelationInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesOrderByWithRelationInput.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Stop_timesOrderByWithRelationInput.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsOrderByWithRelationInput_1.StopsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsOrderByWithRelationInput_1.StopsOrderByWithRelationInput)
], Stop_timesOrderByWithRelationInput.prototype, "stops", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsOrderByWithRelationInput_1.TripsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsOrderByWithRelationInput_1.TripsOrderByWithRelationInput)
], Stop_timesOrderByWithRelationInput.prototype, "trips", void 0);
Stop_timesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesOrderByWithRelationInput", {
        isAbstract: true
    })
], Stop_timesOrderByWithRelationInput);
exports.Stop_timesOrderByWithRelationInput = Stop_timesOrderByWithRelationInput;
