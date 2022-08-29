"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesCreateNestedOneWithoutTripsInput_1 = require("../inputs/RoutesCreateNestedOneWithoutTripsInput");
const Stop_timesCreateNestedManyWithoutTripsInput_1 = require("../inputs/Stop_timesCreateNestedManyWithoutTripsInput");
let TripsCreateInput = class TripsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsCreateInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], TripsCreateInput.prototype, "trip_headsign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsCreateInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsCreateInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesCreateNestedOneWithoutTripsInput_1.RoutesCreateNestedOneWithoutTripsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesCreateNestedOneWithoutTripsInput_1.RoutesCreateNestedOneWithoutTripsInput)
], TripsCreateInput.prototype, "routes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesCreateNestedManyWithoutTripsInput_1.Stop_timesCreateNestedManyWithoutTripsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesCreateNestedManyWithoutTripsInput_1.Stop_timesCreateNestedManyWithoutTripsInput)
], TripsCreateInput.prototype, "stop_times", void 0);
TripsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsCreateInput", {
        isAbstract: true
    })
], TripsCreateInput);
exports.TripsCreateInput = TripsCreateInput;
