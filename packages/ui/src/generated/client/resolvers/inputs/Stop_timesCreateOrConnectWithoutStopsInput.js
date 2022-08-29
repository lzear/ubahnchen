"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesCreateOrConnectWithoutStopsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesCreateWithoutStopsInput_1 = require("../inputs/Stop_timesCreateWithoutStopsInput");
const Stop_timesWhereUniqueInput_1 = require("../inputs/Stop_timesWhereUniqueInput");
let Stop_timesCreateOrConnectWithoutStopsInput = class Stop_timesCreateOrConnectWithoutStopsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput)
], Stop_timesCreateOrConnectWithoutStopsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesCreateWithoutStopsInput_1.Stop_timesCreateWithoutStopsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesCreateWithoutStopsInput_1.Stop_timesCreateWithoutStopsInput)
], Stop_timesCreateOrConnectWithoutStopsInput.prototype, "create", void 0);
Stop_timesCreateOrConnectWithoutStopsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesCreateOrConnectWithoutStopsInput", {
        isAbstract: true
    })
], Stop_timesCreateOrConnectWithoutStopsInput);
exports.Stop_timesCreateOrConnectWithoutStopsInput = Stop_timesCreateOrConnectWithoutStopsInput;
