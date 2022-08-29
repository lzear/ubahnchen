"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesUpdateWithWhereUniqueWithoutStopsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesUpdateWithoutStopsInput_1 = require("../inputs/Stop_timesUpdateWithoutStopsInput");
const Stop_timesWhereUniqueInput_1 = require("../inputs/Stop_timesWhereUniqueInput");
let Stop_timesUpdateWithWhereUniqueWithoutStopsInput = class Stop_timesUpdateWithWhereUniqueWithoutStopsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput)
], Stop_timesUpdateWithWhereUniqueWithoutStopsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesUpdateWithoutStopsInput_1.Stop_timesUpdateWithoutStopsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesUpdateWithoutStopsInput_1.Stop_timesUpdateWithoutStopsInput)
], Stop_timesUpdateWithWhereUniqueWithoutStopsInput.prototype, "data", void 0);
Stop_timesUpdateWithWhereUniqueWithoutStopsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesUpdateWithWhereUniqueWithoutStopsInput", {
        isAbstract: true
    })
], Stop_timesUpdateWithWhereUniqueWithoutStopsInput);
exports.Stop_timesUpdateWithWhereUniqueWithoutStopsInput = Stop_timesUpdateWithWhereUniqueWithoutStopsInput;
