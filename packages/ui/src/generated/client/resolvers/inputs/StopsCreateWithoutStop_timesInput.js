"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsCreateWithoutStop_timesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StopsCreateWithoutStop_timesInput = class StopsCreateWithoutStop_timesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StopsCreateWithoutStop_timesInput.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], StopsCreateWithoutStop_timesInput.prototype, "stop_name", void 0);
StopsCreateWithoutStop_timesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsCreateWithoutStop_timesInput", {
        isAbstract: true
    })
], StopsCreateWithoutStop_timesInput);
exports.StopsCreateWithoutStop_timesInput = StopsCreateWithoutStop_timesInput;
