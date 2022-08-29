"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let StopsUpdateManyMutationInput = class StopsUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StopsUpdateManyMutationInput.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StopsUpdateManyMutationInput.prototype, "stop_name", void 0);
StopsUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsUpdateManyMutationInput", {
        isAbstract: true
    })
], StopsUpdateManyMutationInput);
exports.StopsUpdateManyMutationInput = StopsUpdateManyMutationInput;
