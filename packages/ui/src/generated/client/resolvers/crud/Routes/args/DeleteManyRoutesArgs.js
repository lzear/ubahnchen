"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyRoutesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RoutesWhereInput_1 = require("../../../inputs/RoutesWhereInput");
let DeleteManyRoutesArgs = class DeleteManyRoutesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RoutesWhereInput_1.RoutesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RoutesWhereInput_1.RoutesWhereInput)
], DeleteManyRoutesArgs.prototype, "where", void 0);
DeleteManyRoutesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyRoutesArgs);
exports.DeleteManyRoutesArgs = DeleteManyRoutesArgs;
