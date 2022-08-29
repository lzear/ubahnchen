"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesUpdateManyWithWhereWithoutStopsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesScalarWhereInput_1 = require("../inputs/Stop_timesScalarWhereInput");
const Stop_timesUpdateManyMutationInput_1 = require("../inputs/Stop_timesUpdateManyMutationInput");
let Stop_timesUpdateManyWithWhereWithoutStopsInput = class Stop_timesUpdateManyWithWhereWithoutStopsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesScalarWhereInput_1.Stop_timesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesScalarWhereInput_1.Stop_timesScalarWhereInput)
], Stop_timesUpdateManyWithWhereWithoutStopsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesUpdateManyMutationInput_1.Stop_timesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesUpdateManyMutationInput_1.Stop_timesUpdateManyMutationInput)
], Stop_timesUpdateManyWithWhereWithoutStopsInput.prototype, "data", void 0);
Stop_timesUpdateManyWithWhereWithoutStopsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesUpdateManyWithWhereWithoutStopsInput", {
        isAbstract: true
    })
], Stop_timesUpdateManyWithWhereWithoutStopsInput);
exports.Stop_timesUpdateManyWithWhereWithoutStopsInput = Stop_timesUpdateManyWithWhereWithoutStopsInput;
