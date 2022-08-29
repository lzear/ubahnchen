"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TripsWhereUniqueInput = class TripsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TripsWhereUniqueInput.prototype, "trip_id", void 0);
TripsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TripsWhereUniqueInput", {
        isAbstract: true
    })
], TripsWhereUniqueInput);
exports.TripsWhereUniqueInput = TripsWhereUniqueInput;
