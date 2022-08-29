"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsAvgAggregate_1 = require("../outputs/StopsAvgAggregate");
const StopsCountAggregate_1 = require("../outputs/StopsCountAggregate");
const StopsMaxAggregate_1 = require("../outputs/StopsMaxAggregate");
const StopsMinAggregate_1 = require("../outputs/StopsMinAggregate");
const StopsSumAggregate_1 = require("../outputs/StopsSumAggregate");
let StopsGroupBy = class StopsGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StopsGroupBy.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StopsGroupBy.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StopsGroupBy.prototype, "stop_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCountAggregate_1.StopsCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsCountAggregate_1.StopsCountAggregate)
], StopsGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsAvgAggregate_1.StopsAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsAvgAggregate_1.StopsAvgAggregate)
], StopsGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsSumAggregate_1.StopsSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsSumAggregate_1.StopsSumAggregate)
], StopsGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsMinAggregate_1.StopsMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsMinAggregate_1.StopsMinAggregate)
], StopsGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsMaxAggregate_1.StopsMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsMaxAggregate_1.StopsMaxAggregate)
], StopsGroupBy.prototype, "_max", void 0);
StopsGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StopsGroupBy", {
        isAbstract: true
    })
], StopsGroupBy);
exports.StopsGroupBy = StopsGroupBy;
