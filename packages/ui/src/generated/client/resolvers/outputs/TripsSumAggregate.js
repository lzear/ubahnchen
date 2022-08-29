"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TripsSumAggregate = class TripsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TripsSumAggregate.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TripsSumAggregate.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TripsSumAggregate.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TripsSumAggregate.prototype, "end_time", void 0);
TripsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TripsSumAggregate", {
        isAbstract: true
    })
], TripsSumAggregate);
exports.TripsSumAggregate = TripsSumAggregate;
