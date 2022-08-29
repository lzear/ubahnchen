"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Stop_timesSumAggregate = class Stop_timesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesSumAggregate.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesSumAggregate.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesSumAggregate.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesSumAggregate.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesSumAggregate.prototype, "stop_idx", void 0);
Stop_timesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Stop_timesSumAggregate", {
        isAbstract: true
    })
], Stop_timesSumAggregate);
exports.Stop_timesSumAggregate = Stop_timesSumAggregate;
