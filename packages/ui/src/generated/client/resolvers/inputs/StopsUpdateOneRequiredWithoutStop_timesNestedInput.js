"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsUpdateOneRequiredWithoutStop_timesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsCreateOrConnectWithoutStop_timesInput_1 = require("../inputs/StopsCreateOrConnectWithoutStop_timesInput");
const StopsCreateWithoutStop_timesInput_1 = require("../inputs/StopsCreateWithoutStop_timesInput");
const StopsUpdateWithoutStop_timesInput_1 = require("../inputs/StopsUpdateWithoutStop_timesInput");
const StopsUpsertWithoutStop_timesInput_1 = require("../inputs/StopsUpsertWithoutStop_timesInput");
const StopsWhereUniqueInput_1 = require("../inputs/StopsWhereUniqueInput");
let StopsUpdateOneRequiredWithoutStop_timesNestedInput = class StopsUpdateOneRequiredWithoutStop_timesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCreateWithoutStop_timesInput_1.StopsCreateWithoutStop_timesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsCreateWithoutStop_timesInput_1.StopsCreateWithoutStop_timesInput)
], StopsUpdateOneRequiredWithoutStop_timesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCreateOrConnectWithoutStop_timesInput_1.StopsCreateOrConnectWithoutStop_timesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsCreateOrConnectWithoutStop_timesInput_1.StopsCreateOrConnectWithoutStop_timesInput)
], StopsUpdateOneRequiredWithoutStop_timesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsUpsertWithoutStop_timesInput_1.StopsUpsertWithoutStop_timesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsUpsertWithoutStop_timesInput_1.StopsUpsertWithoutStop_timesInput)
], StopsUpdateOneRequiredWithoutStop_timesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereUniqueInput_1.StopsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsWhereUniqueInput_1.StopsWhereUniqueInput)
], StopsUpdateOneRequiredWithoutStop_timesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsUpdateWithoutStop_timesInput_1.StopsUpdateWithoutStop_timesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsUpdateWithoutStop_timesInput_1.StopsUpdateWithoutStop_timesInput)
], StopsUpdateOneRequiredWithoutStop_timesNestedInput.prototype, "update", void 0);
StopsUpdateOneRequiredWithoutStop_timesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsUpdateOneRequiredWithoutStop_timesNestedInput", {
        isAbstract: true
    })
], StopsUpdateOneRequiredWithoutStop_timesNestedInput);
exports.StopsUpdateOneRequiredWithoutStop_timesNestedInput = StopsUpdateOneRequiredWithoutStop_timesNestedInput;
