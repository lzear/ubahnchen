"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateTrips = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsAvgAggregate_1 = require("../outputs/TripsAvgAggregate");
const TripsCountAggregate_1 = require("../outputs/TripsCountAggregate");
const TripsMaxAggregate_1 = require("../outputs/TripsMaxAggregate");
const TripsMinAggregate_1 = require("../outputs/TripsMinAggregate");
const TripsSumAggregate_1 = require("../outputs/TripsSumAggregate");
let AggregateTrips = class AggregateTrips {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCountAggregate_1.TripsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsCountAggregate_1.TripsCountAggregate)
], AggregateTrips.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsAvgAggregate_1.TripsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsAvgAggregate_1.TripsAvgAggregate)
], AggregateTrips.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsSumAggregate_1.TripsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsSumAggregate_1.TripsSumAggregate)
], AggregateTrips.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsMinAggregate_1.TripsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsMinAggregate_1.TripsMinAggregate)
], AggregateTrips.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsMaxAggregate_1.TripsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsMaxAggregate_1.TripsMaxAggregate)
], AggregateTrips.prototype, "_max", void 0);
AggregateTrips = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateTrips", {
        isAbstract: true
    })
], AggregateTrips);
exports.AggregateTrips = AggregateTrips;
