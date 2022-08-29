"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesCreateNestedManyWithoutTripsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesCreateOrConnectWithoutTripsInput_1 = require("../inputs/Stop_timesCreateOrConnectWithoutTripsInput");
const Stop_timesCreateWithoutTripsInput_1 = require("../inputs/Stop_timesCreateWithoutTripsInput");
const Stop_timesWhereUniqueInput_1 = require("../inputs/Stop_timesWhereUniqueInput");
let Stop_timesCreateNestedManyWithoutTripsInput = class Stop_timesCreateNestedManyWithoutTripsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesCreateWithoutTripsInput_1.Stop_timesCreateWithoutTripsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesCreateNestedManyWithoutTripsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesCreateOrConnectWithoutTripsInput_1.Stop_timesCreateOrConnectWithoutTripsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesCreateNestedManyWithoutTripsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesCreateNestedManyWithoutTripsInput.prototype, "connect", void 0);
Stop_timesCreateNestedManyWithoutTripsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesCreateNestedManyWithoutTripsInput", {
        isAbstract: true
    })
], Stop_timesCreateNestedManyWithoutTripsInput);
exports.Stop_timesCreateNestedManyWithoutTripsInput = Stop_timesCreateNestedManyWithoutTripsInput;
