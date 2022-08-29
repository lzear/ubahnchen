"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesUpdateWithoutTripsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StopsUpdateOneRequiredWithoutStop_timesNestedInput_1 = require("../inputs/StopsUpdateOneRequiredWithoutStop_timesNestedInput");
let Stop_timesUpdateWithoutTripsInput = class Stop_timesUpdateWithoutTripsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], Stop_timesUpdateWithoutTripsInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], Stop_timesUpdateWithoutTripsInput.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsUpdateOneRequiredWithoutStop_timesNestedInput_1.StopsUpdateOneRequiredWithoutStop_timesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsUpdateOneRequiredWithoutStop_timesNestedInput_1.StopsUpdateOneRequiredWithoutStop_timesNestedInput)
], Stop_timesUpdateWithoutTripsInput.prototype, "stops", void 0);
Stop_timesUpdateWithoutTripsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesUpdateWithoutTripsInput", {
        isAbstract: true
    })
], Stop_timesUpdateWithoutTripsInput);
exports.Stop_timesUpdateWithoutTripsInput = Stop_timesUpdateWithoutTripsInput;
