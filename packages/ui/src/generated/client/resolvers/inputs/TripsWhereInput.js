"use strict";
var TripsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const RoutesRelationFilter_1 = require("../inputs/RoutesRelationFilter");
const Stop_timesListRelationFilter_1 = require("../inputs/Stop_timesListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let TripsWhereInput = TripsWhereInput_1 = class TripsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TripsWhereInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TripsWhereInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TripsWhereInput.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], TripsWhereInput.prototype, "trip_headsign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TripsWhereInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], TripsWhereInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesRelationFilter_1.RoutesRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesRelationFilter_1.RoutesRelationFilter)
], TripsWhereInput.prototype, "routes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesListRelationFilter_1.Stop_timesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesListRelationFilter_1.Stop_timesListRelationFilter)
], TripsWhereInput.prototype, "stop_times", void 0);
TripsWhereInput = TripsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsWhereInput", {
        isAbstract: true
    })
], TripsWhereInput);
exports.TripsWhereInput = TripsWhereInput;
