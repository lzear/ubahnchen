"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneRoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesCreateInput_1 = require("../../../inputs/RoutesCreateInput");
const RoutesUpdateInput_1 = require("../../../inputs/RoutesUpdateInput");
const RoutesWhereUniqueInput_1 = require("../../../inputs/RoutesWhereUniqueInput");
let UpsertOneRoutesArgs = class UpsertOneRoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereUniqueInput_1.RoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesWhereUniqueInput_1.RoutesWhereUniqueInput)
], UpsertOneRoutesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesCreateInput_1.RoutesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesCreateInput_1.RoutesCreateInput)
], UpsertOneRoutesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesUpdateInput_1.RoutesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesUpdateInput_1.RoutesUpdateInput)
], UpsertOneRoutesArgs.prototype, "update", void 0);
UpsertOneRoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneRoutesArgs);
exports.UpsertOneRoutesArgs = UpsertOneRoutesArgs;
