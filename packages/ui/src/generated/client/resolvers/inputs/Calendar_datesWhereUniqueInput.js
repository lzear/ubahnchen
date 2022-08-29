"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Calendar_datesWhereUniqueInput = class Calendar_datesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Calendar_datesWhereUniqueInput.prototype, "idx", void 0);
Calendar_datesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Calendar_datesWhereUniqueInput", {
        isAbstract: true
    })
], Calendar_datesWhereUniqueInput);
exports.Calendar_datesWhereUniqueInput = Calendar_datesWhereUniqueInput;
