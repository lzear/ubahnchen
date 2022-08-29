"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StopsCountAggregate = class StopsCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StopsCountAggregate.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StopsCountAggregate.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StopsCountAggregate.prototype, "stop_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], StopsCountAggregate.prototype, "_all", void 0);
StopsCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StopsCountAggregate", {
        isAbstract: true
    })
], StopsCountAggregate);
exports.StopsCountAggregate = StopsCountAggregate;
