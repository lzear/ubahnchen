"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesOrderByWithRelationInput_1 = require("../../../inputs/RoutesOrderByWithRelationInput");
const RoutesWhereInput_1 = require("../../../inputs/RoutesWhereInput");
const RoutesWhereUniqueInput_1 = require("../../../inputs/RoutesWhereUniqueInput");
let AggregateRoutesArgs = class AggregateRoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereInput_1.RoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesWhereInput_1.RoutesWhereInput)
], AggregateRoutesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoutesOrderByWithRelationInput_1.RoutesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateRoutesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereUniqueInput_1.RoutesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesWhereUniqueInput_1.RoutesWhereUniqueInput)
], AggregateRoutesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRoutesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRoutesArgs.prototype, "skip", void 0);
AggregateRoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateRoutesArgs);
exports.AggregateRoutesArgs = AggregateRoutesArgs;
