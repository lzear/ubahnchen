"use strict";
var Stop_timesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StopsRelationFilter_1 = require("../inputs/StopsRelationFilter");
const TripsRelationFilter_1 = require("../inputs/TripsRelationFilter");
let Stop_timesWhereInput = Stop_timesWhereInput_1 = class Stop_timesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Stop_timesWhereInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Stop_timesWhereInput.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Stop_timesWhereInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Stop_timesWhereInput.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Stop_timesWhereInput.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsRelationFilter_1.StopsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsRelationFilter_1.StopsRelationFilter)
], Stop_timesWhereInput.prototype, "stops", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsRelationFilter_1.TripsRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsRelationFilter_1.TripsRelationFilter)
], Stop_timesWhereInput.prototype, "trips", void 0);
Stop_timesWhereInput = Stop_timesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesWhereInput", {
        isAbstract: true
    })
], Stop_timesWhereInput);
exports.Stop_timesWhereInput = Stop_timesWhereInput;
