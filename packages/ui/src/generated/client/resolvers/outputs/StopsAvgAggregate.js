"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StopsAvgAggregate = class StopsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StopsAvgAggregate.prototype, "stop_idx", void 0);
StopsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StopsAvgAggregate", {
        isAbstract: true
    })
], StopsAvgAggregate);
exports.StopsAvgAggregate = StopsAvgAggregate;
