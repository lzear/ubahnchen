"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesUpdateOneRequiredWithoutTripsNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesCreateOrConnectWithoutTripsInput_1 = require("../inputs/RoutesCreateOrConnectWithoutTripsInput");
const RoutesCreateWithoutTripsInput_1 = require("../inputs/RoutesCreateWithoutTripsInput");
const RoutesUpdateWithoutTripsInput_1 = require("../inputs/RoutesUpdateWithoutTripsInput");
const RoutesUpsertWithoutTripsInput_1 = require("../inputs/RoutesUpsertWithoutTripsInput");
const RoutesWhereUniqueInput_1 = require("../inputs/RoutesWhereUniqueInput");
let RoutesUpdateOneRequiredWithoutTripsNestedInput = class RoutesUpdateOneRequiredWithoutTripsNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesCreateWithoutTripsInput_1.RoutesCreateWithoutTripsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesCreateWithoutTripsInput_1.RoutesCreateWithoutTripsInput)
], RoutesUpdateOneRequiredWithoutTripsNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesCreateOrConnectWithoutTripsInput_1.RoutesCreateOrConnectWithoutTripsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesCreateOrConnectWithoutTripsInput_1.RoutesCreateOrConnectWithoutTripsInput)
], RoutesUpdateOneRequiredWithoutTripsNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesUpsertWithoutTripsInput_1.RoutesUpsertWithoutTripsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesUpsertWithoutTripsInput_1.RoutesUpsertWithoutTripsInput)
], RoutesUpdateOneRequiredWithoutTripsNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereUniqueInput_1.RoutesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesWhereUniqueInput_1.RoutesWhereUniqueInput)
], RoutesUpdateOneRequiredWithoutTripsNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesUpdateWithoutTripsInput_1.RoutesUpdateWithoutTripsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesUpdateWithoutTripsInput_1.RoutesUpdateWithoutTripsInput)
], RoutesUpdateOneRequiredWithoutTripsNestedInput.prototype, "update", void 0);
RoutesUpdateOneRequiredWithoutTripsNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesUpdateOneRequiredWithoutTripsNestedInput", {
        isAbstract: true
    })
], RoutesUpdateOneRequiredWithoutTripsNestedInput);
exports.RoutesUpdateOneRequiredWithoutTripsNestedInput = RoutesUpdateOneRequiredWithoutTripsNestedInput;
