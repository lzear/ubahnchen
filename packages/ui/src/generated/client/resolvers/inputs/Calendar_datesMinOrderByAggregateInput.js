"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar_datesMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let Calendar_datesMinOrderByAggregateInput = class Calendar_datesMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesMinOrderByAggregateInput.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesMinOrderByAggregateInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesMinOrderByAggregateInput.prototype, "date", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Calendar_datesMinOrderByAggregateInput.prototype, "is_removing", void 0);
Calendar_datesMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Calendar_datesMinOrderByAggregateInput", {
        isAbstract: true
    })
], Calendar_datesMinOrderByAggregateInput);
exports.Calendar_datesMinOrderByAggregateInput = Calendar_datesMinOrderByAggregateInput;
