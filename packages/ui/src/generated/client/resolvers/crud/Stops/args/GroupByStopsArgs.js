"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByStopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsOrderByWithAggregationInput_1 = require("../../../inputs/StopsOrderByWithAggregationInput");
const StopsScalarWhereWithAggregatesInput_1 = require("../../../inputs/StopsScalarWhereWithAggregatesInput");
const StopsWhereInput_1 = require("../../../inputs/StopsWhereInput");
const StopsScalarFieldEnum_1 = require("../../../../enums/StopsScalarFieldEnum");
let GroupByStopsArgs = class GroupByStopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereInput_1.StopsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsWhereInput_1.StopsWhereInput)
], GroupByStopsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StopsOrderByWithAggregationInput_1.StopsOrderByWithAggregationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStopsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StopsScalarFieldEnum_1.StopsScalarFieldEnum], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], GroupByStopsArgs.prototype, "by", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsScalarWhereWithAggregatesInput_1.StopsScalarWhereWithAggregatesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsScalarWhereWithAggregatesInput_1.StopsScalarWhereWithAggregatesInput)
], GroupByStopsArgs.prototype, "having", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStopsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], GroupByStopsArgs.prototype, "skip", void 0);
GroupByStopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], GroupByStopsArgs);
exports.GroupByStopsArgs = GroupByStopsArgs;
