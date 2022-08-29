"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsCreateWithoutStop_timesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesCreateNestedOneWithoutTripsInput_1 = require("../inputs/RoutesCreateNestedOneWithoutTripsInput");
let TripsCreateWithoutStop_timesInput = class TripsCreateWithoutStop_timesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsCreateWithoutStop_timesInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TripsCreateWithoutStop_timesInput.prototype, "trip_headsign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsCreateWithoutStop_timesInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsCreateWithoutStop_timesInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesCreateNestedOneWithoutTripsInput_1.RoutesCreateNestedOneWithoutTripsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesCreateNestedOneWithoutTripsInput_1.RoutesCreateNestedOneWithoutTripsInput)
], TripsCreateWithoutStop_timesInput.prototype, "routes", void 0);
TripsCreateWithoutStop_timesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsCreateWithoutStop_timesInput", {
        isAbstract: true
    })
], TripsCreateWithoutStop_timesInput);
exports.TripsCreateWithoutStop_timesInput = TripsCreateWithoutStop_timesInput;
