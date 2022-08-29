"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsUpdateManyWithWhereWithoutRoutesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsScalarWhereInput_1 = require("../inputs/TripsScalarWhereInput");
const TripsUpdateManyMutationInput_1 = require("../inputs/TripsUpdateManyMutationInput");
let TripsUpdateManyWithWhereWithoutRoutesInput = class TripsUpdateManyWithWhereWithoutRoutesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsScalarWhereInput_1.TripsScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsScalarWhereInput_1.TripsScalarWhereInput)
], TripsUpdateManyWithWhereWithoutRoutesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsUpdateManyMutationInput_1.TripsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsUpdateManyMutationInput_1.TripsUpdateManyMutationInput)
], TripsUpdateManyWithWhereWithoutRoutesInput.prototype, "data", void 0);
TripsUpdateManyWithWhereWithoutRoutesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsUpdateManyWithWhereWithoutRoutesInput", {
        isAbstract: true
    })
], TripsUpdateManyWithWhereWithoutRoutesInput);
exports.TripsUpdateManyWithWhereWithoutRoutesInput = TripsUpdateManyWithWhereWithoutRoutesInput;
