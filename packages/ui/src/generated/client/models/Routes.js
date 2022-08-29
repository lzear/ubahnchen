"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesCount_1 = require("../resolvers/outputs/RoutesCount");
let Routes = class Routes {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Routes.prototype, "route_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Routes.prototype, "route_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesCount_1.RoutesCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesCount_1.RoutesCount)
], Routes.prototype, "_count", void 0);
Routes = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Routes", {
        isAbstract: true
    })
], Routes);
exports.Routes = Routes;
