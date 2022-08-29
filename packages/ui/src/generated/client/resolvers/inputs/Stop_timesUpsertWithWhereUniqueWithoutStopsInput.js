"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesUpsertWithWhereUniqueWithoutStopsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesCreateWithoutStopsInput_1 = require("../inputs/Stop_timesCreateWithoutStopsInput");
const Stop_timesUpdateWithoutStopsInput_1 = require("../inputs/Stop_timesUpdateWithoutStopsInput");
const Stop_timesWhereUniqueInput_1 = require("../inputs/Stop_timesWhereUniqueInput");
let Stop_timesUpsertWithWhereUniqueWithoutStopsInput = class Stop_timesUpsertWithWhereUniqueWithoutStopsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput)
], Stop_timesUpsertWithWhereUniqueWithoutStopsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesUpdateWithoutStopsInput_1.Stop_timesUpdateWithoutStopsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesUpdateWithoutStopsInput_1.Stop_timesUpdateWithoutStopsInput)
], Stop_timesUpsertWithWhereUniqueWithoutStopsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesCreateWithoutStopsInput_1.Stop_timesCreateWithoutStopsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesCreateWithoutStopsInput_1.Stop_timesCreateWithoutStopsInput)
], Stop_timesUpsertWithWhereUniqueWithoutStopsInput.prototype, "create", void 0);
Stop_timesUpsertWithWhereUniqueWithoutStopsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesUpsertWithWhereUniqueWithoutStopsInput", {
        isAbstract: true
    })
], Stop_timesUpsertWithWhereUniqueWithoutStopsInput);
exports.Stop_timesUpsertWithWhereUniqueWithoutStopsInput = Stop_timesUpsertWithWhereUniqueWithoutStopsInput;
