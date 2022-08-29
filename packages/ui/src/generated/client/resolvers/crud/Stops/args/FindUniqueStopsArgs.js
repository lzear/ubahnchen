"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueStopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsWhereUniqueInput_1 = require("../../../inputs/StopsWhereUniqueInput");
let FindUniqueStopsArgs = class FindUniqueStopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereUniqueInput_1.StopsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsWhereUniqueInput_1.StopsWhereUniqueInput)
], FindUniqueStopsArgs.prototype, "where", void 0);
FindUniqueStopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueStopsArgs);
exports.FindUniqueStopsArgs = FindUniqueStopsArgs;
