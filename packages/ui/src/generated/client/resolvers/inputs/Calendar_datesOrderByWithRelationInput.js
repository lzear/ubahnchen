"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Calendar_datesOrderByWithRelationInput = class Calendar_datesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesOrderByWithRelationInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesOrderByWithRelationInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesOrderByWithRelationInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesOrderByWithRelationInput.prototype, "is_removing", void 0);
Calendar_datesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Calendar_datesOrderByWithRelationInput", {
        isAbstract: true
    })
], Calendar_datesOrderByWithRelationInput);
exports.Calendar_datesOrderByWithRelationInput = Calendar_datesOrderByWithRelationInput;
