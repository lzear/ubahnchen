"use strict";
var Stop_timesScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
let Stop_timesScalarWhereInput = Stop_timesScalarWhereInput_1 = class Stop_timesScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Stop_timesScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Stop_timesScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Stop_timesScalarWhereInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Stop_timesScalarWhereInput.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Stop_timesScalarWhereInput.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Stop_timesScalarWhereInput.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Stop_timesScalarWhereInput.prototype, "stop_idx", void 0);
Stop_timesScalarWhereInput = Stop_timesScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesScalarWhereInput", {
        isAbstract: true
    })
], Stop_timesScalarWhereInput);
exports.Stop_timesScalarWhereInput = Stop_timesScalarWhereInput;
