"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueRoutesOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesWhereUniqueInput_1 = require("../../../inputs/RoutesWhereUniqueInput");
let FindUniqueRoutesOrThrowArgs = class FindUniqueRoutesOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereUniqueInput_1.RoutesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesWhereUniqueInput_1.RoutesWhereUniqueInput)
], FindUniqueRoutesOrThrowArgs.prototype, "where", void 0);
FindUniqueRoutesOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueRoutesOrThrowArgs);
exports.FindUniqueRoutesOrThrowArgs = FindUniqueRoutesOrThrowArgs;
