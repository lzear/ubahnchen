"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByRoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesOrderByWithAggregationInput_1 = require("../../../inputs/RoutesOrderByWithAggregationInput");
const RoutesScalarWhereWithAggregatesInput_1 = require("../../../inputs/RoutesScalarWhereWithAggregatesInput");
const RoutesWhereInput_1 = require("../../../inputs/RoutesWhereInput");
const RoutesScalarFieldEnum_1 = require("../../../../enums/RoutesScalarFieldEnum");
let GroupByRoutesArgs = class GroupByRoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereInput_1.RoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesWhereInput_1.RoutesWhereInput)
], GroupByRoutesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoutesOrderByWithAggregationInput_1.RoutesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRoutesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoutesScalarFieldEnum_1.RoutesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByRoutesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesScalarWhereWithAggregatesInput_1.RoutesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesScalarWhereWithAggregatesInput_1.RoutesScalarWhereWithAggregatesInput)
], GroupByRoutesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRoutesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByRoutesArgs.prototype, "skip", void 0);
GroupByRoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByRoutesArgs);
exports.GroupByRoutesArgs = GroupByRoutesArgs;
