"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesCreateNestedOneWithoutTripsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesCreateOrConnectWithoutTripsInput_1 = require("../inputs/RoutesCreateOrConnectWithoutTripsInput");
const RoutesCreateWithoutTripsInput_1 = require("../inputs/RoutesCreateWithoutTripsInput");
const RoutesWhereUniqueInput_1 = require("../inputs/RoutesWhereUniqueInput");
let RoutesCreateNestedOneWithoutTripsInput = class RoutesCreateNestedOneWithoutTripsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesCreateWithoutTripsInput_1.RoutesCreateWithoutTripsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesCreateWithoutTripsInput_1.RoutesCreateWithoutTripsInput)
], RoutesCreateNestedOneWithoutTripsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesCreateOrConnectWithoutTripsInput_1.RoutesCreateOrConnectWithoutTripsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesCreateOrConnectWithoutTripsInput_1.RoutesCreateOrConnectWithoutTripsInput)
], RoutesCreateNestedOneWithoutTripsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereUniqueInput_1.RoutesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesWhereUniqueInput_1.RoutesWhereUniqueInput)
], RoutesCreateNestedOneWithoutTripsInput.prototype, "connect", void 0);
RoutesCreateNestedOneWithoutTripsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesCreateNestedOneWithoutTripsInput", {
        isAbstract: true
    })
], RoutesCreateNestedOneWithoutTripsInput);
exports.RoutesCreateNestedOneWithoutTripsInput = RoutesCreateNestedOneWithoutTripsInput;
