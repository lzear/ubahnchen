"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Calendar_datesMinAggregate = class Calendar_datesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesMinAggregate.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesMinAggregate.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesMinAggregate.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesMinAggregate.prototype, "is_removing", void 0);
Calendar_datesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Calendar_datesMinAggregate", {
        isAbstract: true
    })
], Calendar_datesMinAggregate);
exports.Calendar_datesMinAggregate = Calendar_datesMinAggregate;
