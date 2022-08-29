"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsCreateOrConnectWithoutStop_timesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsCreateWithoutStop_timesInput_1 = require("../inputs/StopsCreateWithoutStop_timesInput");
const StopsWhereUniqueInput_1 = require("../inputs/StopsWhereUniqueInput");
let StopsCreateOrConnectWithoutStop_timesInput = class StopsCreateOrConnectWithoutStop_timesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereUniqueInput_1.StopsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsWhereUniqueInput_1.StopsWhereUniqueInput)
], StopsCreateOrConnectWithoutStop_timesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCreateWithoutStop_timesInput_1.StopsCreateWithoutStop_timesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsCreateWithoutStop_timesInput_1.StopsCreateWithoutStop_timesInput)
], StopsCreateOrConnectWithoutStop_timesInput.prototype, "create", void 0);
StopsCreateOrConnectWithoutStop_timesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsCreateOrConnectWithoutStop_timesInput", {
        isAbstract: true
    })
], StopsCreateOrConnectWithoutStop_timesInput);
exports.StopsCreateOrConnectWithoutStop_timesInput = StopsCreateOrConnectWithoutStop_timesInput;
