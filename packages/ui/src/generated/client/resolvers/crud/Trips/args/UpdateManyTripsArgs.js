"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyTripsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsUpdateManyMutationInput_1 = require("../../../inputs/TripsUpdateManyMutationInput");
const TripsWhereInput_1 = require("../../../inputs/TripsWhereInput");
let UpdateManyTripsArgs = class UpdateManyTripsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsUpdateManyMutationInput_1.TripsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsUpdateManyMutationInput_1.TripsUpdateManyMutationInput)
], UpdateManyTripsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereInput_1.TripsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereInput_1.TripsWhereInput)
], UpdateManyTripsArgs.prototype, "where", void 0);
UpdateManyTripsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyTripsArgs);
exports.UpdateManyTripsArgs = UpdateManyTripsArgs;
