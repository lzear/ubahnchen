"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let StopsWhereUniqueInput = class StopsWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], StopsWhereUniqueInput.prototype, "stop_idx", void 0);
StopsWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsWhereUniqueInput", {
        isAbstract: true
    })
], StopsWhereUniqueInput);
exports.StopsWhereUniqueInput = StopsWhereUniqueInput;
