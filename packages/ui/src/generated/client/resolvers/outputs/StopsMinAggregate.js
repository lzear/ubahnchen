"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StopsMinAggregate = class StopsMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StopsMinAggregate.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsMinAggregate.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], StopsMinAggregate.prototype, "stop_name", void 0);
StopsMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("StopsMinAggregate", {
        isAbstract: true
    })
], StopsMinAggregate);
exports.StopsMinAggregate = StopsMinAggregate;
