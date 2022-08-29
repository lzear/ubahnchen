"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Stop_timesMinAggregate = class Stop_timesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesMinAggregate.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesMinAggregate.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesMinAggregate.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesMinAggregate.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesMinAggregate.prototype, "stop_idx", void 0);
Stop_timesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Stop_timesMinAggregate", {
        isAbstract: true
    })
], Stop_timesMinAggregate);
exports.Stop_timesMinAggregate = Stop_timesMinAggregate;
