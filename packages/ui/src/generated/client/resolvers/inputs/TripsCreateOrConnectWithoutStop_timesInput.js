"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsCreateOrConnectWithoutStop_timesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsCreateWithoutStop_timesInput_1 = require("../inputs/TripsCreateWithoutStop_timesInput");
const TripsWhereUniqueInput_1 = require("../inputs/TripsWhereUniqueInput");
let TripsCreateOrConnectWithoutStop_timesInput = class TripsCreateOrConnectWithoutStop_timesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereUniqueInput_1.TripsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsWhereUniqueInput_1.TripsWhereUniqueInput)
], TripsCreateOrConnectWithoutStop_timesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCreateWithoutStop_timesInput_1.TripsCreateWithoutStop_timesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsCreateWithoutStop_timesInput_1.TripsCreateWithoutStop_timesInput)
], TripsCreateOrConnectWithoutStop_timesInput.prototype, "create", void 0);
TripsCreateOrConnectWithoutStop_timesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsCreateOrConnectWithoutStop_timesInput", {
        isAbstract: true
    })
], TripsCreateOrConnectWithoutStop_timesInput);
exports.TripsCreateOrConnectWithoutStop_timesInput = TripsCreateOrConnectWithoutStop_timesInput;
