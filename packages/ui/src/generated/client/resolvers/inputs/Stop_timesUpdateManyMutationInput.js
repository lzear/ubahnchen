"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
let Stop_timesUpdateManyMutationInput = class Stop_timesUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], Stop_timesUpdateManyMutationInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], Stop_timesUpdateManyMutationInput.prototype, "departure_time", void 0);
Stop_timesUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesUpdateManyMutationInput", {
        isAbstract: true
    })
], Stop_timesUpdateManyMutationInput);
exports.Stop_timesUpdateManyMutationInput = Stop_timesUpdateManyMutationInput;
