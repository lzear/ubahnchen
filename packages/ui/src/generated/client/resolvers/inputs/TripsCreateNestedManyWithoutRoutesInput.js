"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsCreateNestedManyWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsCreateOrConnectWithoutRoutesInput_1 = require("../inputs/TripsCreateOrConnectWithoutRoutesInput");
const TripsCreateWithoutRoutesInput_1 = require("../inputs/TripsCreateWithoutRoutesInput");
const TripsWhereUniqueInput_1 = require("../inputs/TripsWhereUniqueInput");
let TripsCreateNestedManyWithoutRoutesInput = class TripsCreateNestedManyWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsCreateWithoutRoutesInput_1.TripsCreateWithoutRoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsCreateNestedManyWithoutRoutesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsCreateOrConnectWithoutRoutesInput_1.TripsCreateOrConnectWithoutRoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsCreateNestedManyWithoutRoutesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsWhereUniqueInput_1.TripsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsCreateNestedManyWithoutRoutesInput.prototype, "connect", void 0);
TripsCreateNestedManyWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsCreateNestedManyWithoutRoutesInput", {
        isAbstract: true
    })
], TripsCreateNestedManyWithoutRoutesInput);
exports.TripsCreateNestedManyWithoutRoutesInput = TripsCreateNestedManyWithoutRoutesInput;
