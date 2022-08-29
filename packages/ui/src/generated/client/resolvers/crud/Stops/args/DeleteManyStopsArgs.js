"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyStopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsWhereInput_1 = require("../../../inputs/StopsWhereInput");
let DeleteManyStopsArgs = class DeleteManyStopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereInput_1.StopsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsWhereInput_1.StopsWhereInput)
], DeleteManyStopsArgs.prototype, "where", void 0);
DeleteManyStopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyStopsArgs);
exports.DeleteManyStopsArgs = DeleteManyStopsArgs;
