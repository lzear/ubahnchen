"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const StopsUpdateOneRequiredWithoutStop_timesNestedInput_1 = require("../inputs/StopsUpdateOneRequiredWithoutStop_timesNestedInput");
const TripsUpdateOneRequiredWithoutStop_timesNestedInput_1 = require("../inputs/TripsUpdateOneRequiredWithoutStop_timesNestedInput");
let Stop_timesUpdateInput = class Stop_timesUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], Stop_timesUpdateInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], Stop_timesUpdateInput.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsUpdateOneRequiredWithoutStop_timesNestedInput_1.StopsUpdateOneRequiredWithoutStop_timesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsUpdateOneRequiredWithoutStop_timesNestedInput_1.StopsUpdateOneRequiredWithoutStop_timesNestedInput)
], Stop_timesUpdateInput.prototype, "stops", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsUpdateOneRequiredWithoutStop_timesNestedInput_1.TripsUpdateOneRequiredWithoutStop_timesNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsUpdateOneRequiredWithoutStop_timesNestedInput_1.TripsUpdateOneRequiredWithoutStop_timesNestedInput)
], Stop_timesUpdateInput.prototype, "trips", void 0);
Stop_timesUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesUpdateInput", {
        isAbstract: true
    })
], Stop_timesUpdateInput);
exports.Stop_timesUpdateInput = Stop_timesUpdateInput;
