"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Calendar_datesAvgAggregate = class Calendar_datesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesAvgAggregate.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesAvgAggregate.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesAvgAggregate.prototype, "is_removing", void 0);
Calendar_datesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Calendar_datesAvgAggregate", {
        isAbstract: true
    })
], Calendar_datesAvgAggregate);
exports.Calendar_datesAvgAggregate = Calendar_datesAvgAggregate;
