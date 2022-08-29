"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstTripsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsOrderByWithRelationInput_1 = require("../../../inputs/TripsOrderByWithRelationInput");
const TripsWhereInput_1 = require("../../../inputs/TripsWhereInput");
const TripsWhereUniqueInput_1 = require("../../../inputs/TripsWhereUniqueInput");
const TripsScalarFieldEnum_1 = require("../../../../enums/TripsScalarFieldEnum");
let FindFirstTripsArgs = class FindFirstTripsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereInput_1.TripsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereInput_1.TripsWhereInput)
], FindFirstTripsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsOrderByWithRelationInput_1.TripsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTripsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereUniqueInput_1.TripsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereUniqueInput_1.TripsWhereUniqueInput)
], FindFirstTripsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTripsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstTripsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsScalarFieldEnum_1.TripsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstTripsArgs.prototype, "distinct", void 0);
FindFirstTripsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstTripsArgs);
exports.FindFirstTripsArgs = FindFirstTripsArgs;
