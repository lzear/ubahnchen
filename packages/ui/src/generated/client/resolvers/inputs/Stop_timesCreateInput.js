"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsCreateNestedOneWithoutStop_timesInput_1 = require("../inputs/StopsCreateNestedOneWithoutStop_timesInput");
const TripsCreateNestedOneWithoutStop_timesInput_1 = require("../inputs/TripsCreateNestedOneWithoutStop_timesInput");
let Stop_timesCreateInput = class Stop_timesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesCreateInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesCreateInput.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCreateNestedOneWithoutStop_timesInput_1.StopsCreateNestedOneWithoutStop_timesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsCreateNestedOneWithoutStop_timesInput_1.StopsCreateNestedOneWithoutStop_timesInput)
], Stop_timesCreateInput.prototype, "stops", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCreateNestedOneWithoutStop_timesInput_1.TripsCreateNestedOneWithoutStop_timesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsCreateNestedOneWithoutStop_timesInput_1.TripsCreateNestedOneWithoutStop_timesInput)
], Stop_timesCreateInput.prototype, "trips", void 0);
Stop_timesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesCreateInput", {
        isAbstract: true
    })
], Stop_timesCreateInput);
exports.Stop_timesCreateInput = Stop_timesCreateInput;
