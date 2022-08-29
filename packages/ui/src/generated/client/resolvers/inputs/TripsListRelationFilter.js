"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsWhereInput_1 = require("../inputs/TripsWhereInput");
let TripsListRelationFilter = class TripsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereInput_1.TripsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereInput_1.TripsWhereInput)
], TripsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereInput_1.TripsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereInput_1.TripsWhereInput)
], TripsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereInput_1.TripsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereInput_1.TripsWhereInput)
], TripsListRelationFilter.prototype, "none", void 0);
TripsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsListRelationFilter", {
        isAbstract: true
    })
], TripsListRelationFilter);
exports.TripsListRelationFilter = TripsListRelationFilter;
