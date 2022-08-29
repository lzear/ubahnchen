"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesUpdateManyMutationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Calendar_datesUpdateManyMutationInput = class Calendar_datesUpdateManyMutationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], Calendar_datesUpdateManyMutationInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Calendar_datesUpdateManyMutationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], Calendar_datesUpdateManyMutationInput.prototype, "is_removing", void 0);
Calendar_datesUpdateManyMutationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Calendar_datesUpdateManyMutationInput", {
        isAbstract: true
    })
], Calendar_datesUpdateManyMutationInput);
exports.Calendar_datesUpdateManyMutationInput = Calendar_datesUpdateManyMutationInput;
