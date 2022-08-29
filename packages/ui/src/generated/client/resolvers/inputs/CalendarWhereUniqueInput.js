"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CalendarWhereUniqueInput = class CalendarWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CalendarWhereUniqueInput.prototype, "service_id", void 0);
CalendarWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CalendarWhereUniqueInput", {
        isAbstract: true
    })
], CalendarWhereUniqueInput);
exports.CalendarWhereUniqueInput = CalendarWhereUniqueInput;
