"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StopsMaxAggregate = class StopsMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StopsMaxAggregate.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsMaxAggregate.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsMaxAggregate.prototype, "stop_name", void 0);
StopsMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StopsMaxAggregate", {
        isAbstract: true
    })
], StopsMaxAggregate);
exports.StopsMaxAggregate = StopsMaxAggregate;
