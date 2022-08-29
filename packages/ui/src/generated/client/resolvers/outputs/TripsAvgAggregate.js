"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TripsAvgAggregate = class TripsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TripsAvgAggregate.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TripsAvgAggregate.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TripsAvgAggregate.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TripsAvgAggregate.prototype, "end_time", void 0);
TripsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TripsAvgAggregate", {
        isAbstract: true
    })
], TripsAvgAggregate);
exports.TripsAvgAggregate = TripsAvgAggregate;
