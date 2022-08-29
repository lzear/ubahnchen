"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stop_timesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Stop_timesWhereUniqueInput = class Stop_timesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], Stop_timesWhereUniqueInput.prototype, "idx", void 0);
Stop_timesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("Stop_timesWhereUniqueInput", {
        isAbstract: true
    })
], Stop_timesWhereUniqueInput);
exports.Stop_timesWhereUniqueInput = Stop_timesWhereUniqueInput;
