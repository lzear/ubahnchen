"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsCreateOrConnectWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsCreateWithoutRoutesInput_1 = require("../inputs/TripsCreateWithoutRoutesInput");
const TripsWhereUniqueInput_1 = require("../inputs/TripsWhereUniqueInput");
let TripsCreateOrConnectWithoutRoutesInput = class TripsCreateOrConnectWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereUniqueInput_1.TripsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsWhereUniqueInput_1.TripsWhereUniqueInput)
], TripsCreateOrConnectWithoutRoutesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCreateWithoutRoutesInput_1.TripsCreateWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsCreateWithoutRoutesInput_1.TripsCreateWithoutRoutesInput)
], TripsCreateOrConnectWithoutRoutesInput.prototype, "create", void 0);
TripsCreateOrConnectWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsCreateOrConnectWithoutRoutesInput", {
        isAbstract: true
    })
], TripsCreateOrConnectWithoutRoutesInput);
exports.TripsCreateOrConnectWithoutRoutesInput = TripsCreateOrConnectWithoutRoutesInput;
