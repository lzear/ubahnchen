"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesUpdateManyWithoutTripsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesCreateOrConnectWithoutTripsInput_1 = require("../inputs/Stop_timesCreateOrConnectWithoutTripsInput");
const Stop_timesCreateWithoutTripsInput_1 = require("../inputs/Stop_timesCreateWithoutTripsInput");
const Stop_timesScalarWhereInput_1 = require("../inputs/Stop_timesScalarWhereInput");
const Stop_timesUpdateManyWithWhereWithoutTripsInput_1 = require("../inputs/Stop_timesUpdateManyWithWhereWithoutTripsInput");
const Stop_timesUpdateWithWhereUniqueWithoutTripsInput_1 = require("../inputs/Stop_timesUpdateWithWhereUniqueWithoutTripsInput");
const Stop_timesUpsertWithWhereUniqueWithoutTripsInput_1 = require("../inputs/Stop_timesUpsertWithWhereUniqueWithoutTripsInput");
const Stop_timesWhereUniqueInput_1 = require("../inputs/Stop_timesWhereUniqueInput");
let Stop_timesUpdateManyWithoutTripsNestedInput = class Stop_timesUpdateManyWithoutTripsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesCreateWithoutTripsInput_1.Stop_timesCreateWithoutTripsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutTripsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesCreateOrConnectWithoutTripsInput_1.Stop_timesCreateOrConnectWithoutTripsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutTripsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesUpsertWithWhereUniqueWithoutTripsInput_1.Stop_timesUpsertWithWhereUniqueWithoutTripsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutTripsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutTripsNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutTripsNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutTripsNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutTripsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesUpdateWithWhereUniqueWithoutTripsInput_1.Stop_timesUpdateWithWhereUniqueWithoutTripsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutTripsNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesUpdateManyWithWhereWithoutTripsInput_1.Stop_timesUpdateManyWithWhereWithoutTripsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutTripsNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesScalarWhereInput_1.Stop_timesScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesUpdateManyWithoutTripsNestedInput.prototype, "deleteMany", void 0);
Stop_timesUpdateManyWithoutTripsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesUpdateManyWithoutTripsNestedInput", {
        isAbstract: true
    })
], Stop_timesUpdateManyWithoutTripsNestedInput);
exports.Stop_timesUpdateManyWithoutTripsNestedInput = Stop_timesUpdateManyWithoutTripsNestedInput;
