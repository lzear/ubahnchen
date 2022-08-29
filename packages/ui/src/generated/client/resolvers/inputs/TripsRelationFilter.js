"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsWhereInput_1 = require("../inputs/TripsWhereInput");
let TripsRelationFilter = class TripsRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereInput_1.TripsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereInput_1.TripsWhereInput)
], TripsRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereInput_1.TripsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereInput_1.TripsWhereInput)
], TripsRelationFilter.prototype, "isNot", void 0);
TripsRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsRelationFilter", {
        isAbstract: true
    })
], TripsRelationFilter);
exports.TripsRelationFilter = TripsRelationFilter;
