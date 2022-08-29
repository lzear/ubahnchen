"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsUpsertWithoutStop_timesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsCreateWithoutStop_timesInput_1 = require("../inputs/StopsCreateWithoutStop_timesInput");
const StopsUpdateWithoutStop_timesInput_1 = require("../inputs/StopsUpdateWithoutStop_timesInput");
let StopsUpsertWithoutStop_timesInput = class StopsUpsertWithoutStop_timesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsUpdateWithoutStop_timesInput_1.StopsUpdateWithoutStop_timesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsUpdateWithoutStop_timesInput_1.StopsUpdateWithoutStop_timesInput)
], StopsUpsertWithoutStop_timesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCreateWithoutStop_timesInput_1.StopsCreateWithoutStop_timesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsCreateWithoutStop_timesInput_1.StopsCreateWithoutStop_timesInput)
], StopsUpsertWithoutStop_timesInput.prototype, "create", void 0);
StopsUpsertWithoutStop_timesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsUpsertWithoutStop_timesInput", {
        isAbstract: true
    })
], StopsUpsertWithoutStop_timesInput);
exports.StopsUpsertWithoutStop_timesInput = StopsUpsertWithoutStop_timesInput;
