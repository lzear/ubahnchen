"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesUpdateWithoutStopsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const TripsUpdateOneRequiredWithoutStop_timesNestedInput_1 = require("../inputs/TripsUpdateOneRequiredWithoutStop_timesNestedInput");
let Stop_timesUpdateWithoutStopsInput = class Stop_timesUpdateWithoutStopsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], Stop_timesUpdateWithoutStopsInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], Stop_timesUpdateWithoutStopsInput.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsUpdateOneRequiredWithoutStop_timesNestedInput_1.TripsUpdateOneRequiredWithoutStop_timesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsUpdateOneRequiredWithoutStop_timesNestedInput_1.TripsUpdateOneRequiredWithoutStop_timesNestedInput)
], Stop_timesUpdateWithoutStopsInput.prototype, "trips", void 0);
Stop_timesUpdateWithoutStopsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesUpdateWithoutStopsInput", {
        isAbstract: true
    })
], Stop_timesUpdateWithoutStopsInput);
exports.Stop_timesUpdateWithoutStopsInput = Stop_timesUpdateWithoutStopsInput;
