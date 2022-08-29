"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesTripsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsOrderByWithRelationInput_1 = require("../../../inputs/TripsOrderByWithRelationInput");
const TripsWhereInput_1 = require("../../../inputs/TripsWhereInput");
const TripsWhereUniqueInput_1 = require("../../../inputs/TripsWhereUniqueInput");
const TripsScalarFieldEnum_1 = require("../../../../enums/TripsScalarFieldEnum");
let RoutesTripsArgs = class RoutesTripsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereInput_1.TripsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereInput_1.TripsWhereInput)
], RoutesTripsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsOrderByWithRelationInput_1.TripsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoutesTripsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereUniqueInput_1.TripsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereUniqueInput_1.TripsWhereUniqueInput)
], RoutesTripsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RoutesTripsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], RoutesTripsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TripsScalarFieldEnum_1.TripsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoutesTripsArgs.prototype, "distinct", void 0);
RoutesTripsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], RoutesTripsArgs);
exports.RoutesTripsArgs = RoutesTripsArgs;
