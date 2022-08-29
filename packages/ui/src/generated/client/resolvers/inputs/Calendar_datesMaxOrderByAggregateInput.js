"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesMaxOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Calendar_datesMaxOrderByAggregateInput = class Calendar_datesMaxOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesMaxOrderByAggregateInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesMaxOrderByAggregateInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesMaxOrderByAggregateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesMaxOrderByAggregateInput.prototype, "is_removing", void 0);
Calendar_datesMaxOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Calendar_datesMaxOrderByAggregateInput", {
        isAbstract: true
    })
], Calendar_datesMaxOrderByAggregateInput);
exports.Calendar_datesMaxOrderByAggregateInput = Calendar_datesMaxOrderByAggregateInput;
