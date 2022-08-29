"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesCreateOrConnectWithoutTripsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesCreateWithoutTripsInput_1 = require("../inputs/Stop_timesCreateWithoutTripsInput");
const Stop_timesWhereUniqueInput_1 = require("../inputs/Stop_timesWhereUniqueInput");
let Stop_timesCreateOrConnectWithoutTripsInput = class Stop_timesCreateOrConnectWithoutTripsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput)
], Stop_timesCreateOrConnectWithoutTripsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesCreateWithoutTripsInput_1.Stop_timesCreateWithoutTripsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesCreateWithoutTripsInput_1.Stop_timesCreateWithoutTripsInput)
], Stop_timesCreateOrConnectWithoutTripsInput.prototype, "create", void 0);
Stop_timesCreateOrConnectWithoutTripsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesCreateOrConnectWithoutTripsInput", {
        isAbstract: true
    })
], Stop_timesCreateOrConnectWithoutTripsInput);
exports.Stop_timesCreateOrConnectWithoutTripsInput = Stop_timesCreateOrConnectWithoutTripsInput;
