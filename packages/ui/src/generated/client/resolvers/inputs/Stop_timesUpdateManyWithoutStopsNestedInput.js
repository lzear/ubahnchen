"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesUpdateManyWithoutStopsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesCreateOrConnectWithoutStopsInput_1 = require("../inputs/Stop_timesCreateOrConnectWithoutStopsInput");
const Stop_timesCreateWithoutStopsInput_1 = require("../inputs/Stop_timesCreateWithoutStopsInput");
const Stop_timesScalarWhereInput_1 = require("../inputs/Stop_timesScalarWhereInput");
const Stop_timesUpdateManyWithWhereWithoutStopsInput_1 = require("../inputs/Stop_timesUpdateManyWithWhereWithoutStopsInput");
const Stop_timesUpdateWithWhereUniqueWithoutStopsInput_1 = require("../inputs/Stop_timesUpdateWithWhereUniqueWithoutStopsInput");
const Stop_timesUpsertWithWhereUniqueWithoutStopsInput_1 = require("../inputs/Stop_timesUpsertWithWhereUniqueWithoutStopsInput");
const Stop_timesWhereUniqueInput_1 = require("../inputs/Stop_timesWhereUniqueInput");
let Stop_timesUpdateManyWithoutStopsNestedInput = class Stop_timesUpdateManyWithoutStopsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesCreateWithoutStopsInput_1.Stop_timesCreateWithoutStopsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutStopsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesCreateOrConnectWithoutStopsInput_1.Stop_timesCreateOrConnectWithoutStopsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutStopsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesUpsertWithWhereUniqueWithoutStopsInput_1.Stop_timesUpsertWithWhereUniqueWithoutStopsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutStopsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutStopsNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutStopsNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutStopsNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutStopsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesUpdateWithWhereUniqueWithoutStopsInput_1.Stop_timesUpdateWithWhereUniqueWithoutStopsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutStopsNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesUpdateManyWithWhereWithoutStopsInput_1.Stop_timesUpdateManyWithWhereWithoutStopsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutStopsNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesScalarWhereInput_1.Stop_timesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutStopsNestedInput.prototype, "deleteMany", void 0);
Stop_timesUpdateManyWithoutStopsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesUpdateManyWithoutStopsNestedInput", {
        isAbstract: true
    })
], Stop_timesUpdateManyWithoutStopsNestedInput);
exports.Stop_timesUpdateManyWithoutStopsNestedInput = Stop_timesUpdateManyWithoutStopsNestedInput;
