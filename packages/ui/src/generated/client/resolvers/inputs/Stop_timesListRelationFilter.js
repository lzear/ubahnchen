"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesWhereInput_1 = require("../inputs/Stop_timesWhereInput");
let Stop_timesListRelationFilter = class Stop_timesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereInput_1.Stop_timesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereInput_1.Stop_timesWhereInput)
], Stop_timesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereInput_1.Stop_timesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereInput_1.Stop_timesWhereInput)
], Stop_timesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereInput_1.Stop_timesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereInput_1.Stop_timesWhereInput)
], Stop_timesListRelationFilter.prototype, "none", void 0);
Stop_timesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesListRelationFilter", {
        isAbstract: true
    })
], Stop_timesListRelationFilter);
exports.Stop_timesListRelationFilter = Stop_timesListRelationFilter;
