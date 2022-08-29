"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesCreateNestedManyWithoutStopsInput_1 = require("../inputs/Stop_timesCreateNestedManyWithoutStopsInput");
let StopsCreateInput = class StopsCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StopsCreateInput.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StopsCreateInput.prototype, "stop_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesCreateNestedManyWithoutStopsInput_1.Stop_timesCreateNestedManyWithoutStopsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesCreateNestedManyWithoutStopsInput_1.Stop_timesCreateNestedManyWithoutStopsInput)
], StopsCreateInput.prototype, "stop_times", void 0);
StopsCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsCreateInput", {
        isAbstract: true
    })
], StopsCreateInput);
exports.StopsCreateInput = StopsCreateInput;
