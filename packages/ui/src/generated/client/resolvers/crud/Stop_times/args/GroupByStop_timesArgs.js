"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStop_timesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesOrderByWithAggregationInput_1 = require("../../../inputs/Stop_timesOrderByWithAggregationInput");
const Stop_timesScalarWhereWithAggregatesInput_1 = require("../../../inputs/Stop_timesScalarWhereWithAggregatesInput");
const Stop_timesWhereInput_1 = require("../../../inputs/Stop_timesWhereInput");
const Stop_timesScalarFieldEnum_1 = require("../../../../enums/Stop_timesScalarFieldEnum");
let GroupByStop_timesArgs = class GroupByStop_timesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereInput_1.Stop_timesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereInput_1.Stop_timesWhereInput)
], GroupByStop_timesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesOrderByWithAggregationInput_1.Stop_timesOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStop_timesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesScalarFieldEnum_1.Stop_timesScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStop_timesArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesScalarWhereWithAggregatesInput_1.Stop_timesScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesScalarWhereWithAggregatesInput_1.Stop_timesScalarWhereWithAggregatesInput)
], GroupByStop_timesArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStop_timesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStop_timesArgs.prototype, "skip", void 0);
GroupByStop_timesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByStop_timesArgs);
exports.GroupByStop_timesArgs = GroupByStop_timesArgs;
