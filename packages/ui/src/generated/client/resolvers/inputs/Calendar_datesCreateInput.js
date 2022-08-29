"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Calendar_datesCreateInput = class Calendar_datesCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesCreateInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesCreateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesCreateInput.prototype, "is_removing", void 0);
Calendar_datesCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Calendar_datesCreateInput", {
        isAbstract: true
    })
], Calendar_datesCreateInput);
exports.Calendar_datesCreateInput = Calendar_datesCreateInput;
