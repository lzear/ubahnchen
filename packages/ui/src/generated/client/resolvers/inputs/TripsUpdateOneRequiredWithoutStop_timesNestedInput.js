"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsUpdateOneRequiredWithoutStop_timesNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsCreateOrConnectWithoutStop_timesInput_1 = require("../inputs/TripsCreateOrConnectWithoutStop_timesInput");
const TripsCreateWithoutStop_timesInput_1 = require("../inputs/TripsCreateWithoutStop_timesInput");
const TripsUpdateWithoutStop_timesInput_1 = require("../inputs/TripsUpdateWithoutStop_timesInput");
const TripsUpsertWithoutStop_timesInput_1 = require("../inputs/TripsUpsertWithoutStop_timesInput");
const TripsWhereUniqueInput_1 = require("../inputs/TripsWhereUniqueInput");
let TripsUpdateOneRequiredWithoutStop_timesNestedInput = class TripsUpdateOneRequiredWithoutStop_timesNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCreateWithoutStop_timesInput_1.TripsCreateWithoutStop_timesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsCreateWithoutStop_timesInput_1.TripsCreateWithoutStop_timesInput)
], TripsUpdateOneRequiredWithoutStop_timesNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCreateOrConnectWithoutStop_timesInput_1.TripsCreateOrConnectWithoutStop_timesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsCreateOrConnectWithoutStop_timesInput_1.TripsCreateOrConnectWithoutStop_timesInput)
], TripsUpdateOneRequiredWithoutStop_timesNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsUpsertWithoutStop_timesInput_1.TripsUpsertWithoutStop_timesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsUpsertWithoutStop_timesInput_1.TripsUpsertWithoutStop_timesInput)
], TripsUpdateOneRequiredWithoutStop_timesNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereUniqueInput_1.TripsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereUniqueInput_1.TripsWhereUniqueInput)
], TripsUpdateOneRequiredWithoutStop_timesNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsUpdateWithoutStop_timesInput_1.TripsUpdateWithoutStop_timesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsUpdateWithoutStop_timesInput_1.TripsUpdateWithoutStop_timesInput)
], TripsUpdateOneRequiredWithoutStop_timesNestedInput.prototype, "update", void 0);
TripsUpdateOneRequiredWithoutStop_timesNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsUpdateOneRequiredWithoutStop_timesNestedInput", {
        isAbstract: true
    })
], TripsUpdateOneRequiredWithoutStop_timesNestedInput);
exports.TripsUpdateOneRequiredWithoutStop_timesNestedInput = TripsUpdateOneRequiredWithoutStop_timesNestedInput;
