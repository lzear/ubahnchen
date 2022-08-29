"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstRoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesOrderByWithRelationInput_1 = require("../../../inputs/RoutesOrderByWithRelationInput");
const RoutesWhereInput_1 = require("../../../inputs/RoutesWhereInput");
const RoutesWhereUniqueInput_1 = require("../../../inputs/RoutesWhereUniqueInput");
const RoutesScalarFieldEnum_1 = require("../../../../enums/RoutesScalarFieldEnum");
let FindFirstRoutesArgs = class FindFirstRoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereInput_1.RoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesWhereInput_1.RoutesWhereInput)
], FindFirstRoutesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoutesOrderByWithRelationInput_1.RoutesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRoutesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereUniqueInput_1.RoutesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesWhereUniqueInput_1.RoutesWhereUniqueInput)
], FindFirstRoutesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRoutesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstRoutesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoutesScalarFieldEnum_1.RoutesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstRoutesArgs.prototype, "distinct", void 0);
FindFirstRoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstRoutesArgs);
exports.FindFirstRoutesArgs = FindFirstRoutesArgs;
