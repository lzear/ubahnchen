"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesCreateOrConnectWithoutTripsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesCreateWithoutTripsInput_1 = require("../inputs/RoutesCreateWithoutTripsInput");
const RoutesWhereUniqueInput_1 = require("../inputs/RoutesWhereUniqueInput");
let RoutesCreateOrConnectWithoutTripsInput = class RoutesCreateOrConnectWithoutTripsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereUniqueInput_1.RoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesWhereUniqueInput_1.RoutesWhereUniqueInput)
], RoutesCreateOrConnectWithoutTripsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesCreateWithoutTripsInput_1.RoutesCreateWithoutTripsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesCreateWithoutTripsInput_1.RoutesCreateWithoutTripsInput)
], RoutesCreateOrConnectWithoutTripsInput.prototype, "create", void 0);
RoutesCreateOrConnectWithoutTripsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesCreateOrConnectWithoutTripsInput", {
        isAbstract: true
    })
], RoutesCreateOrConnectWithoutTripsInput);
exports.RoutesCreateOrConnectWithoutTripsInput = RoutesCreateOrConnectWithoutTripsInput;
