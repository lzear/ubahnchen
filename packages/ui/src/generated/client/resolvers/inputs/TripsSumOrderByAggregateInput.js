"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let TripsSumOrderByAggregateInput = class TripsSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsSumOrderByAggregateInput.prototype, "service_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsSumOrderByAggregateInput.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsSumOrderByAggregateInput.prototype, "start_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TripsSumOrderByAggregateInput.prototype, "end_time", void 0);
TripsSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsSumOrderByAggregateInput", {
        isAbstract: true
    })
], TripsSumOrderByAggregateInput);
exports.TripsSumOrderByAggregateInput = TripsSumOrderByAggregateInput;
