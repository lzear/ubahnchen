"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesCreateWithoutStopsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsCreateNestedOneWithoutStop_timesInput_1 = require("../inputs/TripsCreateNestedOneWithoutStop_timesInput");
let Stop_timesCreateWithoutStopsInput = class Stop_timesCreateWithoutStopsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesCreateWithoutStopsInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesCreateWithoutStopsInput.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCreateNestedOneWithoutStop_timesInput_1.TripsCreateNestedOneWithoutStop_timesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsCreateNestedOneWithoutStop_timesInput_1.TripsCreateNestedOneWithoutStop_timesInput)
], Stop_timesCreateWithoutStopsInput.prototype, "trips", void 0);
Stop_timesCreateWithoutStopsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesCreateWithoutStopsInput", {
        isAbstract: true
    })
], Stop_timesCreateWithoutStopsInput);
exports.Stop_timesCreateWithoutStopsInput = Stop_timesCreateWithoutStopsInput;
