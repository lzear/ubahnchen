"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let RoutesWhereUniqueInput = class RoutesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RoutesWhereUniqueInput.prototype, "route_id", void 0);
RoutesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RoutesWhereUniqueInput", {
        isAbstract: true
    })
], RoutesWhereUniqueInput);
exports.RoutesWhereUniqueInput = RoutesWhereUniqueInput;
