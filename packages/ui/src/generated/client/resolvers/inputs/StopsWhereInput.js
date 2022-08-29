"use strict";
var StopsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const Stop_timesListRelationFilter_1 = require("../inputs/Stop_timesListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let StopsWhereInput = StopsWhereInput_1 = class StopsWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StopsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StopsWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StopsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StopsWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StopsWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], StopsWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], StopsWhereInput.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StopsWhereInput.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], StopsWhereInput.prototype, "stop_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesListRelationFilter_1.Stop_timesListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesListRelationFilter_1.Stop_timesListRelationFilter)
], StopsWhereInput.prototype, "stop_times", void 0);
StopsWhereInput = StopsWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsWhereInput", {
        isAbstract: true
    })
], StopsWhereInput);
exports.StopsWhereInput = StopsWhereInput;
