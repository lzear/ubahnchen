"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TripsCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TripsCount = class TripsCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TripsCount.prototype, "stop_times", void 0);
TripsCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TripsCount", {
        isAbstract: true
    })
], TripsCount);
exports.TripsCount = TripsCount;
