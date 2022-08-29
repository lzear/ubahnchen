"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trips = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsCount_1 = require("../resolvers/outputs/TripsCount");
let Trips = class Trips {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Trips.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Trips.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Trips.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Trips.prototype, "trip_headsign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Trips.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Trips.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCount_1.TripsCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsCount_1.TripsCount)
], Trips.prototype, "_count", void 0);
Trips = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Trips", {
        isAbstract: true
    })
], Trips);
exports.Trips = Trips;
