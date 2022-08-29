"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StopsCount = class StopsCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StopsCount.prototype, "stop_times", void 0);
StopsCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StopsCount", {
        isAbstract: true
    })
], StopsCount);
exports.StopsCount = StopsCount;
