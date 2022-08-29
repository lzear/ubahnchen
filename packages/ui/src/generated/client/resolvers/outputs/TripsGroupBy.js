"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsAvgAggregate_1 = require("../outputs/TripsAvgAggregate");
const TripsCountAggregate_1 = require("../outputs/TripsCountAggregate");
const TripsMaxAggregate_1 = require("../outputs/TripsMaxAggregate");
const TripsMinAggregate_1 = require("../outputs/TripsMinAggregate");
const TripsSumAggregate_1 = require("../outputs/TripsSumAggregate");
let TripsGroupBy = class TripsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TripsGroupBy.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsGroupBy.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsGroupBy.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TripsGroupBy.prototype, "trip_headsign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsGroupBy.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsGroupBy.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCountAggregate_1.TripsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsCountAggregate_1.TripsCountAggregate)
], TripsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsAvgAggregate_1.TripsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsAvgAggregate_1.TripsAvgAggregate)
], TripsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsSumAggregate_1.TripsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsSumAggregate_1.TripsSumAggregate)
], TripsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsMinAggregate_1.TripsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsMinAggregate_1.TripsMinAggregate)
], TripsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsMaxAggregate_1.TripsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsMaxAggregate_1.TripsMaxAggregate)
], TripsGroupBy.prototype, "_max", void 0);
TripsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TripsGroupBy", {
        isAbstract: true
    })
], TripsGroupBy);
exports.TripsGroupBy = TripsGroupBy;
