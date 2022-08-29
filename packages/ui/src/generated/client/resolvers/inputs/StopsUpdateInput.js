"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesUpdateManyWithoutStopsNestedInput_1 = require("../inputs/Stop_timesUpdateManyWithoutStopsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let StopsUpdateInput = class StopsUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StopsUpdateInput.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], StopsUpdateInput.prototype, "stop_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesUpdateManyWithoutStopsNestedInput_1.Stop_timesUpdateManyWithoutStopsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesUpdateManyWithoutStopsNestedInput_1.Stop_timesUpdateManyWithoutStopsNestedInput)
], StopsUpdateInput.prototype, "stop_times", void 0);
StopsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsUpdateInput", {
        isAbstract: true
    })
], StopsUpdateInput);
exports.StopsUpdateInput = StopsUpdateInput;
