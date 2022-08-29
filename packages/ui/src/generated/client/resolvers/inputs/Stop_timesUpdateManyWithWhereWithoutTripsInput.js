"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesUpdateManyWithWhereWithoutTripsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesScalarWhereInput_1 = require("../inputs/Stop_timesScalarWhereInput");
const Stop_timesUpdateManyMutationInput_1 = require("../inputs/Stop_timesUpdateManyMutationInput");
let Stop_timesUpdateManyWithWhereWithoutTripsInput = class Stop_timesUpdateManyWithWhereWithoutTripsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesScalarWhereInput_1.Stop_timesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesScalarWhereInput_1.Stop_timesScalarWhereInput)
], Stop_timesUpdateManyWithWhereWithoutTripsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesUpdateManyMutationInput_1.Stop_timesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesUpdateManyMutationInput_1.Stop_timesUpdateManyMutationInput)
], Stop_timesUpdateManyWithWhereWithoutTripsInput.prototype, "data", void 0);
Stop_timesUpdateManyWithWhereWithoutTripsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesUpdateManyWithWhereWithoutTripsInput", {
        isAbstract: true
    })
], Stop_timesUpdateManyWithWhereWithoutTripsInput);
exports.Stop_timesUpdateManyWithWhereWithoutTripsInput = Stop_timesUpdateManyWithWhereWithoutTripsInput;
