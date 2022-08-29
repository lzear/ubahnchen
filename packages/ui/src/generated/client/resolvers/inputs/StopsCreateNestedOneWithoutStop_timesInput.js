"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsCreateNestedOneWithoutStop_timesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsCreateOrConnectWithoutStop_timesInput_1 = require("../inputs/StopsCreateOrConnectWithoutStop_timesInput");
const StopsCreateWithoutStop_timesInput_1 = require("../inputs/StopsCreateWithoutStop_timesInput");
const StopsWhereUniqueInput_1 = require("../inputs/StopsWhereUniqueInput");
let StopsCreateNestedOneWithoutStop_timesInput = class StopsCreateNestedOneWithoutStop_timesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCreateWithoutStop_timesInput_1.StopsCreateWithoutStop_timesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsCreateWithoutStop_timesInput_1.StopsCreateWithoutStop_timesInput)
], StopsCreateNestedOneWithoutStop_timesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCreateOrConnectWithoutStop_timesInput_1.StopsCreateOrConnectWithoutStop_timesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsCreateOrConnectWithoutStop_timesInput_1.StopsCreateOrConnectWithoutStop_timesInput)
], StopsCreateNestedOneWithoutStop_timesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereUniqueInput_1.StopsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsWhereUniqueInput_1.StopsWhereUniqueInput)
], StopsCreateNestedOneWithoutStop_timesInput.prototype, "connect", void 0);
StopsCreateNestedOneWithoutStop_timesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsCreateNestedOneWithoutStop_timesInput", {
        isAbstract: true
    })
], StopsCreateNestedOneWithoutStop_timesInput);
exports.StopsCreateNestedOneWithoutStop_timesInput = StopsCreateNestedOneWithoutStop_timesInput;
