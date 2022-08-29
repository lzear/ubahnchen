"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_dates = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Calendar_dates = class Calendar_dates {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_dates.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_dates.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_dates.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_dates.prototype, "is_removing", void 0);
Calendar_dates = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Calendar_dates", {
        isAbstract: true
    })
], Calendar_dates);
exports.Calendar_dates = Calendar_dates;
