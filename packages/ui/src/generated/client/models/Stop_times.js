"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_times = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Stop_times = class Stop_times {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_times.prototype, "idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_times.prototype, "trip_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_times.prototype, "arrival_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_times.prototype, "departure_time", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_times.prototype, "stop_idx", void 0);
Stop_times = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Stop_times", {
        isAbstract: true
    })
], Stop_times);
exports.Stop_times = Stop_times;
