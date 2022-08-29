"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesUpdateWithWhereUniqueWithoutTripsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesUpdateWithoutTripsInput_1 = require("../inputs/Stop_timesUpdateWithoutTripsInput");
const Stop_timesWhereUniqueInput_1 = require("../inputs/Stop_timesWhereUniqueInput");
let Stop_timesUpdateWithWhereUniqueWithoutTripsInput = class Stop_timesUpdateWithWhereUniqueWithoutTripsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput)
], Stop_timesUpdateWithWhereUniqueWithoutTripsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesUpdateWithoutTripsInput_1.Stop_timesUpdateWithoutTripsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesUpdateWithoutTripsInput_1.Stop_timesUpdateWithoutTripsInput)
], Stop_timesUpdateWithWhereUniqueWithoutTripsInput.prototype, "data", void 0);
Stop_timesUpdateWithWhereUniqueWithoutTripsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesUpdateWithWhereUniqueWithoutTripsInput", {
        isAbstract: true
    })
], Stop_timesUpdateWithWhereUniqueWithoutTripsInput);
exports.Stop_timesUpdateWithWhereUniqueWithoutTripsInput = Stop_timesUpdateWithWhereUniqueWithoutTripsInput;
