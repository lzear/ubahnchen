"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsUpsertWithWhereUniqueWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsCreateWithoutRoutesInput_1 = require("../inputs/TripsCreateWithoutRoutesInput");
const TripsUpdateWithoutRoutesInput_1 = require("../inputs/TripsUpdateWithoutRoutesInput");
const TripsWhereUniqueInput_1 = require("../inputs/TripsWhereUniqueInput");
let TripsUpsertWithWhereUniqueWithoutRoutesInput = class TripsUpsertWithWhereUniqueWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereUniqueInput_1.TripsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsWhereUniqueInput_1.TripsWhereUniqueInput)
], TripsUpsertWithWhereUniqueWithoutRoutesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsUpdateWithoutRoutesInput_1.TripsUpdateWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsUpdateWithoutRoutesInput_1.TripsUpdateWithoutRoutesInput)
], TripsUpsertWithWhereUniqueWithoutRoutesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCreateWithoutRoutesInput_1.TripsCreateWithoutRoutesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsCreateWithoutRoutesInput_1.TripsCreateWithoutRoutesInput)
], TripsUpsertWithWhereUniqueWithoutRoutesInput.prototype, "create", void 0);
TripsUpsertWithWhereUniqueWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsUpsertWithWhereUniqueWithoutRoutesInput", {
        isAbstract: true
    })
], TripsUpsertWithWhereUniqueWithoutRoutesInput);
exports.TripsUpsertWithWhereUniqueWithoutRoutesInput = TripsUpsertWithWhereUniqueWithoutRoutesInput;
