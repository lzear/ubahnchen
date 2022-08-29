"use strict";
var Calendar_datesWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let Calendar_datesWhereInput = Calendar_datesWhereInput_1 = class Calendar_datesWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Calendar_datesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Calendar_datesWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Calendar_datesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Calendar_datesWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [Calendar_datesWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], Calendar_datesWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Calendar_datesWhereInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Calendar_datesWhereInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], Calendar_datesWhereInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], Calendar_datesWhereInput.prototype, "is_removing", void 0);
Calendar_datesWhereInput = Calendar_datesWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("Calendar_datesWhereInput", {
        isAbstract: true
    })
], Calendar_datesWhereInput);
exports.Calendar_datesWhereInput = Calendar_datesWhereInput;
