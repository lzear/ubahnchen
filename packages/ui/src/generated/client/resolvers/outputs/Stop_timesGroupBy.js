"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesAvgAggregate_1 = require("../outputs/Stop_timesAvgAggregate");
const Stop_timesCountAggregate_1 = require("../outputs/Stop_timesCountAggregate");
const Stop_timesMaxAggregate_1 = require("../outputs/Stop_timesMaxAggregate");
const Stop_timesMinAggregate_1 = require("../outputs/Stop_timesMinAggregate");
const Stop_timesSumAggregate_1 = require("../outputs/Stop_timesSumAggregate");
let Stop_timesGroupBy = class Stop_timesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesGroupBy.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesGroupBy.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesGroupBy.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesGroupBy.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesGroupBy.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesCountAggregate_1.Stop_timesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesCountAggregate_1.Stop_timesCountAggregate)
], Stop_timesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesAvgAggregate_1.Stop_timesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesAvgAggregate_1.Stop_timesAvgAggregate)
], Stop_timesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesSumAggregate_1.Stop_timesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesSumAggregate_1.Stop_timesSumAggregate)
], Stop_timesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesMinAggregate_1.Stop_timesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesMinAggregate_1.Stop_timesMinAggregate)
], Stop_timesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesMaxAggregate_1.Stop_timesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesMaxAggregate_1.Stop_timesMaxAggregate)
], Stop_timesGroupBy.prototype, "_max", void 0);
Stop_timesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Stop_timesGroupBy", {
        isAbstract: true
    })
], Stop_timesGroupBy);
exports.Stop_timesGroupBy = Stop_timesGroupBy;
