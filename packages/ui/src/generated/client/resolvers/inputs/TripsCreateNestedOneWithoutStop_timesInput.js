"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsCreateNestedOneWithoutStop_timesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsCreateOrConnectWithoutStop_timesInput_1 = require("../inputs/TripsCreateOrConnectWithoutStop_timesInput");
const TripsCreateWithoutStop_timesInput_1 = require("../inputs/TripsCreateWithoutStop_timesInput");
const TripsWhereUniqueInput_1 = require("../inputs/TripsWhereUniqueInput");
let TripsCreateNestedOneWithoutStop_timesInput = class TripsCreateNestedOneWithoutStop_timesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCreateWithoutStop_timesInput_1.TripsCreateWithoutStop_timesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsCreateWithoutStop_timesInput_1.TripsCreateWithoutStop_timesInput)
], TripsCreateNestedOneWithoutStop_timesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCreateOrConnectWithoutStop_timesInput_1.TripsCreateOrConnectWithoutStop_timesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsCreateOrConnectWithoutStop_timesInput_1.TripsCreateOrConnectWithoutStop_timesInput)
], TripsCreateNestedOneWithoutStop_timesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereUniqueInput_1.TripsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereUniqueInput_1.TripsWhereUniqueInput)
], TripsCreateNestedOneWithoutStop_timesInput.prototype, "connect", void 0);
TripsCreateNestedOneWithoutStop_timesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsCreateNestedOneWithoutStop_timesInput", {
        isAbstract: true
    })
], TripsCreateNestedOneWithoutStop_timesInput);
exports.TripsCreateNestedOneWithoutStop_timesInput = TripsCreateNestedOneWithoutStop_timesInput;
