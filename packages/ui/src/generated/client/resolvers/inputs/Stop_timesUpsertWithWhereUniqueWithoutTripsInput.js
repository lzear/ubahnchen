"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesUpsertWithWhereUniqueWithoutTripsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesCreateWithoutTripsInput_1 = require("../inputs/Stop_timesCreateWithoutTripsInput");
const Stop_timesUpdateWithoutTripsInput_1 = require("../inputs/Stop_timesUpdateWithoutTripsInput");
const Stop_timesWhereUniqueInput_1 = require("../inputs/Stop_timesWhereUniqueInput");
let Stop_timesUpsertWithWhereUniqueWithoutTripsInput = class Stop_timesUpsertWithWhereUniqueWithoutTripsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput)
], Stop_timesUpsertWithWhereUniqueWithoutTripsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesUpdateWithoutTripsInput_1.Stop_timesUpdateWithoutTripsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesUpdateWithoutTripsInput_1.Stop_timesUpdateWithoutTripsInput)
], Stop_timesUpsertWithWhereUniqueWithoutTripsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesCreateWithoutTripsInput_1.Stop_timesCreateWithoutTripsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesCreateWithoutTripsInput_1.Stop_timesCreateWithoutTripsInput)
], Stop_timesUpsertWithWhereUniqueWithoutTripsInput.prototype, "create", void 0);
Stop_timesUpsertWithWhereUniqueWithoutTripsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesUpsertWithWhereUniqueWithoutTripsInput", {
        isAbstract: true
    })
], Stop_timesUpsertWithWhereUniqueWithoutTripsInput);
exports.Stop_timesUpsertWithWhereUniqueWithoutTripsInput = Stop_timesUpsertWithWhereUniqueWithoutTripsInput;
