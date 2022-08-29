"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStop_times = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesAvgAggregate_1 = require("../outputs/Stop_timesAvgAggregate");
const Stop_timesCountAggregate_1 = require("../outputs/Stop_timesCountAggregate");
const Stop_timesMaxAggregate_1 = require("../outputs/Stop_timesMaxAggregate");
const Stop_timesMinAggregate_1 = require("../outputs/Stop_timesMinAggregate");
const Stop_timesSumAggregate_1 = require("../outputs/Stop_timesSumAggregate");
let AggregateStop_times = class AggregateStop_times {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesCountAggregate_1.Stop_timesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesCountAggregate_1.Stop_timesCountAggregate)
], AggregateStop_times.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesAvgAggregate_1.Stop_timesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesAvgAggregate_1.Stop_timesAvgAggregate)
], AggregateStop_times.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesSumAggregate_1.Stop_timesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesSumAggregate_1.Stop_timesSumAggregate)
], AggregateStop_times.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesMinAggregate_1.Stop_timesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesMinAggregate_1.Stop_timesMinAggregate)
], AggregateStop_times.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesMaxAggregate_1.Stop_timesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesMaxAggregate_1.Stop_timesMaxAggregate)
], AggregateStop_times.prototype, "_max", void 0);
AggregateStop_times = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateStop_times", {
        isAbstract: true
    })
], AggregateStop_times);
exports.AggregateStop_times = AggregateStop_times;
