"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesCreateWithoutTripsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsCreateNestedOneWithoutStop_timesInput_1 = require("../inputs/StopsCreateNestedOneWithoutStop_timesInput");
let Stop_timesCreateWithoutTripsInput = class Stop_timesCreateWithoutTripsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesCreateWithoutTripsInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesCreateWithoutTripsInput.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCreateNestedOneWithoutStop_timesInput_1.StopsCreateNestedOneWithoutStop_timesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsCreateNestedOneWithoutStop_timesInput_1.StopsCreateNestedOneWithoutStop_timesInput)
], Stop_timesCreateWithoutTripsInput.prototype, "stops", void 0);
Stop_timesCreateWithoutTripsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesCreateWithoutTripsInput", {
        isAbstract: true
    })
], Stop_timesCreateWithoutTripsInput);
exports.Stop_timesCreateWithoutTripsInput = Stop_timesCreateWithoutTripsInput;
