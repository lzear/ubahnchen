"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesWhereInput_1 = require("../inputs/RoutesWhereInput");
let RoutesRelationFilter = class RoutesRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereInput_1.RoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesWhereInput_1.RoutesWhereInput)
], RoutesRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereInput_1.RoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesWhereInput_1.RoutesWhereInput)
], RoutesRelationFilter.prototype, "isNot", void 0);
RoutesRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesRelationFilter", {
        isAbstract: true
    })
], RoutesRelationFilter);
exports.RoutesRelationFilter = RoutesRelationFilter;
