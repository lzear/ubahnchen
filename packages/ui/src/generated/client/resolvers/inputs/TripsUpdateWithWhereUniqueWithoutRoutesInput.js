"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsUpdateWithWhereUniqueWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsUpdateWithoutRoutesInput_1 = require("../inputs/TripsUpdateWithoutRoutesInput");
const TripsWhereUniqueInput_1 = require("../inputs/TripsWhereUniqueInput");
let TripsUpdateWithWhereUniqueWithoutRoutesInput = class TripsUpdateWithWhereUniqueWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereUniqueInput_1.TripsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsWhereUniqueInput_1.TripsWhereUniqueInput)
], TripsUpdateWithWhereUniqueWithoutRoutesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsUpdateWithoutRoutesInput_1.TripsUpdateWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsUpdateWithoutRoutesInput_1.TripsUpdateWithoutRoutesInput)
], TripsUpdateWithWhereUniqueWithoutRoutesInput.prototype, "data", void 0);
TripsUpdateWithWhereUniqueWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsUpdateWithWhereUniqueWithoutRoutesInput", {
        isAbstract: true
    })
], TripsUpdateWithWhereUniqueWithoutRoutesInput);
exports.TripsUpdateWithWhereUniqueWithoutRoutesInput = TripsUpdateWithWhereUniqueWithoutRoutesInput;
