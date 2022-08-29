"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneRoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesUpdateInput_1 = require("../../../inputs/RoutesUpdateInput");
const RoutesWhereUniqueInput_1 = require("../../../inputs/RoutesWhereUniqueInput");
let UpdateOneRoutesArgs = class UpdateOneRoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesUpdateInput_1.RoutesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesUpdateInput_1.RoutesUpdateInput)
], UpdateOneRoutesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereUniqueInput_1.RoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesWhereUniqueInput_1.RoutesWhereUniqueInput)
], UpdateOneRoutesArgs.prototype, "where", void 0);
UpdateOneRoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneRoutesArgs);
exports.UpdateOneRoutesArgs = UpdateOneRoutesArgs;
