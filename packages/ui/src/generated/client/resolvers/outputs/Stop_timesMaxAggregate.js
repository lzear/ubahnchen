"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Stop_timesMaxAggregate = class Stop_timesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesMaxAggregate.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesMaxAggregate.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesMaxAggregate.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesMaxAggregate.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesMaxAggregate.prototype, "stop_idx", void 0);
Stop_timesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Stop_timesMaxAggregate", {
        isAbstract: true
    })
], Stop_timesMaxAggregate);
exports.Stop_timesMaxAggregate = Stop_timesMaxAggregate;
