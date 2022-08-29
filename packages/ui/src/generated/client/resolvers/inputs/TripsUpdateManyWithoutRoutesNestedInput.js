"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsUpdateManyWithoutRoutesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsCreateOrConnectWithoutRoutesInput_1 = require("../inputs/TripsCreateOrConnectWithoutRoutesInput");
const TripsCreateWithoutRoutesInput_1 = require("../inputs/TripsCreateWithoutRoutesInput");
const TripsScalarWhereInput_1 = require("../inputs/TripsScalarWhereInput");
const TripsUpdateManyWithWhereWithoutRoutesInput_1 = require("../inputs/TripsUpdateManyWithWhereWithoutRoutesInput");
const TripsUpdateWithWhereUniqueWithoutRoutesInput_1 = require("../inputs/TripsUpdateWithWhereUniqueWithoutRoutesInput");
const TripsUpsertWithWhereUniqueWithoutRoutesInput_1 = require("../inputs/TripsUpsertWithWhereUniqueWithoutRoutesInput");
const TripsWhereUniqueInput_1 = require("../inputs/TripsWhereUniqueInput");
let TripsUpdateManyWithoutRoutesNestedInput = class TripsUpdateManyWithoutRoutesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsCreateWithoutRoutesInput_1.TripsCreateWithoutRoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsUpdateManyWithoutRoutesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsCreateOrConnectWithoutRoutesInput_1.TripsCreateOrConnectWithoutRoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsUpdateManyWithoutRoutesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsUpsertWithWhereUniqueWithoutRoutesInput_1.TripsUpsertWithWhereUniqueWithoutRoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsUpdateManyWithoutRoutesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsWhereUniqueInput_1.TripsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsUpdateManyWithoutRoutesNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsWhereUniqueInput_1.TripsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsUpdateManyWithoutRoutesNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsWhereUniqueInput_1.TripsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsUpdateManyWithoutRoutesNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsWhereUniqueInput_1.TripsWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsUpdateManyWithoutRoutesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsUpdateWithWhereUniqueWithoutRoutesInput_1.TripsUpdateWithWhereUniqueWithoutRoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsUpdateManyWithoutRoutesNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsUpdateManyWithWhereWithoutRoutesInput_1.TripsUpdateManyWithWhereWithoutRoutesInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsUpdateManyWithoutRoutesNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsScalarWhereInput_1.TripsScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TripsUpdateManyWithoutRoutesNestedInput.prototype, "deleteMany", void 0);
TripsUpdateManyWithoutRoutesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsUpdateManyWithoutRoutesNestedInput", {
        isAbstract: true
    })
], TripsUpdateManyWithoutRoutesNestedInput);
exports.TripsUpdateManyWithoutRoutesNestedInput = TripsUpdateManyWithoutRoutesNestedInput;
