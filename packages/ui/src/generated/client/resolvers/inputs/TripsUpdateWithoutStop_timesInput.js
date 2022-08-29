"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsUpdateWithoutStop_timesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const RoutesUpdateOneRequiredWithoutTripsNestedInput_1 = require("../inputs/RoutesUpdateOneRequiredWithoutTripsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TripsUpdateWithoutStop_timesInput = class TripsUpdateWithoutStop_timesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TripsUpdateWithoutStop_timesInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TripsUpdateWithoutStop_timesInput.prototype, "trip_headsign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TripsUpdateWithoutStop_timesInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TripsUpdateWithoutStop_timesInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesUpdateOneRequiredWithoutTripsNestedInput_1.RoutesUpdateOneRequiredWithoutTripsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesUpdateOneRequiredWithoutTripsNestedInput_1.RoutesUpdateOneRequiredWithoutTripsNestedInput)
], TripsUpdateWithoutStop_timesInput.prototype, "routes", void 0);
TripsUpdateWithoutStop_timesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsUpdateWithoutStop_timesInput", {
        isAbstract: true
    })
], TripsUpdateWithoutStop_timesInput);
exports.TripsUpdateWithoutStop_timesInput = TripsUpdateWithoutStop_timesInput;
