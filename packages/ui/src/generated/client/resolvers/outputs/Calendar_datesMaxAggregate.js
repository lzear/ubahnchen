"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Calendar_datesMaxAggregate = class Calendar_datesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesMaxAggregate.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesMaxAggregate.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesMaxAggregate.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesMaxAggregate.prototype, "is_removing", void 0);
Calendar_datesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Calendar_datesMaxAggregate", {
        isAbstract: true
    })
], Calendar_datesMaxAggregate);
exports.Calendar_datesMaxAggregate = Calendar_datesMaxAggregate;
