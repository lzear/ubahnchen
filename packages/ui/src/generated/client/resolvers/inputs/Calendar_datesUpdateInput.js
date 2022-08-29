"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let Calendar_datesUpdateInput = class Calendar_datesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], Calendar_datesUpdateInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], Calendar_datesUpdateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], Calendar_datesUpdateInput.prototype, "is_removing", void 0);
Calendar_datesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Calendar_datesUpdateInput", {
        isAbstract: true
    })
], Calendar_datesUpdateInput);
exports.Calendar_datesUpdateInput = Calendar_datesUpdateInput;
