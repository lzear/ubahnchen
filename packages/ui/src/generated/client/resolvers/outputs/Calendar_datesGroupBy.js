"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Calendar_datesAvgAggregate_1 = require("../outputs/Calendar_datesAvgAggregate");
const Calendar_datesCountAggregate_1 = require("../outputs/Calendar_datesCountAggregate");
const Calendar_datesMaxAggregate_1 = require("../outputs/Calendar_datesMaxAggregate");
const Calendar_datesMinAggregate_1 = require("../outputs/Calendar_datesMinAggregate");
const Calendar_datesSumAggregate_1 = require("../outputs/Calendar_datesSumAggregate");
let Calendar_datesGroupBy = class Calendar_datesGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesGroupBy.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesGroupBy.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesGroupBy.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesGroupBy.prototype, "is_removing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesCountAggregate_1.Calendar_datesCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesCountAggregate_1.Calendar_datesCountAggregate)
], Calendar_datesGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesAvgAggregate_1.Calendar_datesAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesAvgAggregate_1.Calendar_datesAvgAggregate)
], Calendar_datesGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesSumAggregate_1.Calendar_datesSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesSumAggregate_1.Calendar_datesSumAggregate)
], Calendar_datesGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesMinAggregate_1.Calendar_datesMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesMinAggregate_1.Calendar_datesMinAggregate)
], Calendar_datesGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Calendar_datesMaxAggregate_1.Calendar_datesMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Calendar_datesMaxAggregate_1.Calendar_datesMaxAggregate)
], Calendar_datesGroupBy.prototype, "_max", void 0);
Calendar_datesGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Calendar_datesGroupBy", {
        isAbstract: true
    })
], Calendar_datesGroupBy);
exports.Calendar_datesGroupBy = Calendar_datesGroupBy;
