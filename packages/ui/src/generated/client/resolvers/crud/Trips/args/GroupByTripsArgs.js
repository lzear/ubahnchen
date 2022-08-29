"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByTripsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsOrderByWithAggregationInput_1 = require("../../../inputs/TripsOrderByWithAggregationInput");
const TripsScalarWhereWithAggregatesInput_1 = require("../../../inputs/TripsScalarWhereWithAggregatesInput");
const TripsWhereInput_1 = require("../../../inputs/TripsWhereInput");
const TripsScalarFieldEnum_1 = require("../../../../enums/TripsScalarFieldEnum");
let GroupByTripsArgs = class GroupByTripsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereInput_1.TripsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereInput_1.TripsWhereInput)
], GroupByTripsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsOrderByWithAggregationInput_1.TripsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTripsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsScalarFieldEnum_1.TripsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByTripsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsScalarWhereWithAggregatesInput_1.TripsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsScalarWhereWithAggregatesInput_1.TripsScalarWhereWithAggregatesInput)
], GroupByTripsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTripsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByTripsArgs.prototype, "skip", void 0);
GroupByTripsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByTripsArgs);
exports.GroupByTripsArgs = GroupByTripsArgs;
