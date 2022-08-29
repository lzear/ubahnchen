"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Stop_timesAvgAggregate = class Stop_timesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesAvgAggregate.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesAvgAggregate.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesAvgAggregate.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesAvgAggregate.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesAvgAggregate.prototype, "stop_idx", void 0);
Stop_timesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Stop_timesAvgAggregate", {
        isAbstract: true
    })
], Stop_timesAvgAggregate);
exports.Stop_timesAvgAggregate = Stop_timesAvgAggregate;
