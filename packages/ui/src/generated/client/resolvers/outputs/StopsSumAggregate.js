"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StopsSumAggregate = class StopsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StopsSumAggregate.prototype, "stop_idx", void 0);
StopsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StopsSumAggregate", {
        isAbstract: true
    })
], StopsSumAggregate);
exports.StopsSumAggregate = StopsSumAggregate;
