"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsStop_timesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesOrderByWithRelationInput_1 = require("../../../inputs/Stop_timesOrderByWithRelationInput");
const Stop_timesWhereInput_1 = require("../../../inputs/Stop_timesWhereInput");
const Stop_timesWhereUniqueInput_1 = require("../../../inputs/Stop_timesWhereUniqueInput");
const Stop_timesScalarFieldEnum_1 = require("../../../../enums/Stop_timesScalarFieldEnum");
let StopsStop_timesArgs = class StopsStop_timesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereInput_1.Stop_timesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereInput_1.Stop_timesWhereInput)
], StopsStop_timesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesOrderByWithRelationInput_1.Stop_timesOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StopsStop_timesArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput)
], StopsStop_timesArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StopsStop_timesArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StopsStop_timesArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesScalarFieldEnum_1.Stop_timesScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StopsStop_timesArgs.prototype, "distinct", void 0);
StopsStop_timesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], StopsStop_timesArgs);
exports.StopsStop_timesArgs = StopsStop_timesArgs;
