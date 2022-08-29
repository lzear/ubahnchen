"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStops = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsAvgAggregate_1 = require("../outputs/StopsAvgAggregate");
const StopsCountAggregate_1 = require("../outputs/StopsCountAggregate");
const StopsMaxAggregate_1 = require("../outputs/StopsMaxAggregate");
const StopsMinAggregate_1 = require("../outputs/StopsMinAggregate");
const StopsSumAggregate_1 = require("../outputs/StopsSumAggregate");
let AggregateStops = class AggregateStops {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCountAggregate_1.StopsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsCountAggregate_1.StopsCountAggregate)
], AggregateStops.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsAvgAggregate_1.StopsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsAvgAggregate_1.StopsAvgAggregate)
], AggregateStops.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsSumAggregate_1.StopsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsSumAggregate_1.StopsSumAggregate)
], AggregateStops.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsMinAggregate_1.StopsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsMinAggregate_1.StopsMinAggregate)
], AggregateStops.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsMaxAggregate_1.StopsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsMaxAggregate_1.StopsMaxAggregate)
], AggregateStops.prototype, "_max", void 0);
AggregateStops = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateStops", {
        isAbstract: true
    })
], AggregateStops);
exports.AggregateStops = AggregateStops;
