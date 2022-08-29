"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsCreateWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesCreateNestedManyWithoutTripsInput_1 = require("../inputs/Stop_timesCreateNestedManyWithoutTripsInput");
let TripsCreateWithoutRoutesInput = class TripsCreateWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsCreateWithoutRoutesInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TripsCreateWithoutRoutesInput.prototype, "trip_headsign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsCreateWithoutRoutesInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsCreateWithoutRoutesInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesCreateNestedManyWithoutTripsInput_1.Stop_timesCreateNestedManyWithoutTripsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesCreateNestedManyWithoutTripsInput_1.Stop_timesCreateNestedManyWithoutTripsInput)
], TripsCreateWithoutRoutesInput.prototype, "stop_times", void 0);
TripsCreateWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsCreateWithoutRoutesInput", {
        isAbstract: true
    })
], TripsCreateWithoutRoutesInput);
exports.TripsCreateWithoutRoutesInput = TripsCreateWithoutRoutesInput;
