"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stops = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsCount_1 = require("../resolvers/outputs/StopsCount");
let Stops = class Stops {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Stops.prototype, "stop_idx", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Stops.prototype, "stop_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Stops.prototype, "stop_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCount_1.StopsCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsCount_1.StopsCount)
], Stops.prototype, "_count", void 0);
Stops = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Stops", {
        isAbstract: true
    })
], Stops);
exports.Stops = Stops;
