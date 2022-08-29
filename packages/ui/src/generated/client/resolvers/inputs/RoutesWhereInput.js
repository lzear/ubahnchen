"use strict";
var RoutesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StringFilter_1 = require("../inputs/StringFilter");
const TripsListRelationFilter_1 = require("../inputs/TripsListRelationFilter");
let RoutesWhereInput = RoutesWhereInput_1 = class RoutesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoutesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoutesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoutesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoutesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RoutesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RoutesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RoutesWhereInput.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], RoutesWhereInput.prototype, "route_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsListRelationFilter_1.TripsListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsListRelationFilter_1.TripsListRelationFilter)
], RoutesWhereInput.prototype, "trips", void 0);
RoutesWhereInput = RoutesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesWhereInput", {
        isAbstract: true
    })
], RoutesWhereInput);
exports.RoutesWhereInput = RoutesWhereInput;
