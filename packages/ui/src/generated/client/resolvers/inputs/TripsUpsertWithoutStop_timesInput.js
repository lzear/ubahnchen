"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsUpsertWithoutStop_timesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsCreateWithoutStop_timesInput_1 = require("../inputs/TripsCreateWithoutStop_timesInput");
const TripsUpdateWithoutStop_timesInput_1 = require("../inputs/TripsUpdateWithoutStop_timesInput");
let TripsUpsertWithoutStop_timesInput = class TripsUpsertWithoutStop_timesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsUpdateWithoutStop_timesInput_1.TripsUpdateWithoutStop_timesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsUpdateWithoutStop_timesInput_1.TripsUpdateWithoutStop_timesInput)
], TripsUpsertWithoutStop_timesInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCreateWithoutStop_timesInput_1.TripsCreateWithoutStop_timesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsCreateWithoutStop_timesInput_1.TripsCreateWithoutStop_timesInput)
], TripsUpsertWithoutStop_timesInput.prototype, "create", void 0);
TripsUpsertWithoutStop_timesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsUpsertWithoutStop_timesInput", {
        isAbstract: true
    })
], TripsUpsertWithoutStop_timesInput);
exports.TripsUpsertWithoutStop_timesInput = TripsUpsertWithoutStop_timesInput;
