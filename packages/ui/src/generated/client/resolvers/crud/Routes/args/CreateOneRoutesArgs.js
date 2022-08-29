"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneRoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesCreateInput_1 = require("../../../inputs/RoutesCreateInput");
let CreateOneRoutesArgs = class CreateOneRoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesCreateInput_1.RoutesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RoutesCreateInput_1.RoutesCreateInput)
], CreateOneRoutesArgs.prototype, "data", void 0);
CreateOneRoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneRoutesArgs);
exports.CreateOneRoutesArgs = CreateOneRoutesArgs;
