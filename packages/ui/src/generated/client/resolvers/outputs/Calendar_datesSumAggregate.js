"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Calendar_datesSumAggregate = class Calendar_datesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesSumAggregate.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesSumAggregate.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesSumAggregate.prototype, "is_removing", void 0);
Calendar_datesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Calendar_datesSumAggregate", {
        isAbstract: true
    })
], Calendar_datesSumAggregate);
exports.Calendar_datesSumAggregate = Calendar_datesSumAggregate;
