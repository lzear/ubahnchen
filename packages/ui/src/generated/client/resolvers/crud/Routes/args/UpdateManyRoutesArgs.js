"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesUpdateManyMutationInput_1 = require("../../../inputs/RoutesUpdateManyMutationInput");
const RoutesWhereInput_1 = require("../../../inputs/RoutesWhereInput");
let UpdateManyRoutesArgs = class UpdateManyRoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesUpdateManyMutationInput_1.RoutesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesUpdateManyMutationInput_1.RoutesUpdateManyMutationInput)
], UpdateManyRoutesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereInput_1.RoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesWhereInput_1.RoutesWhereInput)
], UpdateManyRoutesArgs.prototype, "where", void 0);
UpdateManyRoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyRoutesArgs);
exports.UpdateManyRoutesArgs = UpdateManyRoutesArgs;
