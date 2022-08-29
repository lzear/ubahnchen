"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesCreateNestedManyWithoutStopsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesCreateOrConnectWithoutStopsInput_1 = require("../inputs/Stop_timesCreateOrConnectWithoutStopsInput");
const Stop_timesCreateWithoutStopsInput_1 = require("../inputs/Stop_timesCreateWithoutStopsInput");
const Stop_timesWhereUniqueInput_1 = require("../inputs/Stop_timesWhereUniqueInput");
let Stop_timesCreateNestedManyWithoutStopsInput = class Stop_timesCreateNestedManyWithoutStopsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesCreateWithoutStopsInput_1.Stop_timesCreateWithoutStopsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesCreateNestedManyWithoutStopsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesCreateOrConnectWithoutStopsInput_1.Stop_timesCreateOrConnectWithoutStopsInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesCreateNestedManyWithoutStopsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesCreateNestedManyWithoutStopsInput.prototype, "connect", void 0);
Stop_timesCreateNestedManyWithoutStopsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesCreateNestedManyWithoutStopsInput", {
        isAbstract: true
    })
], Stop_timesCreateNestedManyWithoutStopsInput);
exports.Stop_timesCreateNestedManyWithoutStopsInput = Stop_timesCreateNestedManyWithoutStopsInput;
