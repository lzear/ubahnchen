"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Calendar_datesCountAggregate = class Calendar_datesCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesCountAggregate.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesCountAggregate.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesCountAggregate.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesCountAggregate.prototype, "is_removing", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesCountAggregate.prototype, "_all", void 0);
Calendar_datesCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Calendar_datesCountAggregate", {
        isAbstract: true
    })
], Calendar_datesCountAggregate);
exports.Calendar_datesCountAggregate = Calendar_datesCountAggregate;
