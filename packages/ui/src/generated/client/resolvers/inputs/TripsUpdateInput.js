"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsUpdateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const RoutesUpdateOneRequiredWithoutTripsNestedInput_1 = require("../inputs/RoutesUpdateOneRequiredWithoutTripsNestedInput");
const Stop_timesUpdateManyWithoutTripsNestedInput_1 = require("../inputs/Stop_timesUpdateManyWithoutTripsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TripsUpdateInput = class TripsUpdateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TripsUpdateInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TripsUpdateInput.prototype, "trip_headsign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TripsUpdateInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TripsUpdateInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesUpdateOneRequiredWithoutTripsNestedInput_1.RoutesUpdateOneRequiredWithoutTripsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesUpdateOneRequiredWithoutTripsNestedInput_1.RoutesUpdateOneRequiredWithoutTripsNestedInput)
], TripsUpdateInput.prototype, "routes", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesUpdateManyWithoutTripsNestedInput_1.Stop_timesUpdateManyWithoutTripsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesUpdateManyWithoutTripsNestedInput_1.Stop_timesUpdateManyWithoutTripsNestedInput)
], TripsUpdateInput.prototype, "stop_times", void 0);
TripsUpdateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsUpdateInput", {
        isAbstract: true
    })
], TripsUpdateInput);
exports.TripsUpdateInput = TripsUpdateInput;
