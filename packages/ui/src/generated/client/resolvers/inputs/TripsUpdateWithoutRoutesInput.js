"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsUpdateWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFieldUpdateOperationsInput_1 = require("../inputs/IntFieldUpdateOperationsInput");
const Stop_timesUpdateManyWithoutTripsNestedInput_1 = require("../inputs/Stop_timesUpdateManyWithoutTripsNestedInput");
const StringFieldUpdateOperationsInput_1 = require("../inputs/StringFieldUpdateOperationsInput");
let TripsUpdateWithoutRoutesInput = class TripsUpdateWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TripsUpdateWithoutRoutesInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFieldUpdateOperationsInput_1.StringFieldUpdateOperationsInput)
], TripsUpdateWithoutRoutesInput.prototype, "trip_headsign", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TripsUpdateWithoutRoutesInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFieldUpdateOperationsInput_1.IntFieldUpdateOperationsInput)
], TripsUpdateWithoutRoutesInput.prototype, "end_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesUpdateManyWithoutTripsNestedInput_1.Stop_timesUpdateManyWithoutTripsNestedInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesUpdateManyWithoutTripsNestedInput_1.Stop_timesUpdateManyWithoutTripsNestedInput)
], TripsUpdateWithoutRoutesInput.prototype, "stop_times", void 0);
TripsUpdateWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsUpdateWithoutRoutesInput", {
        isAbstract: true
    })
], TripsUpdateWithoutRoutesInput);
exports.TripsUpdateWithoutRoutesInput = TripsUpdateWithoutRoutesInput;
