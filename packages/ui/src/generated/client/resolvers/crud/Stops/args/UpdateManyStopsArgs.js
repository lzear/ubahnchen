"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyStopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsUpdateManyMutationInput_1 = require("../../../inputs/StopsUpdateManyMutationInput");
const StopsWhereInput_1 = require("../../../inputs/StopsWhereInput");
let UpdateManyStopsArgs = class UpdateManyStopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsUpdateManyMutationInput_1.StopsUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsUpdateManyMutationInput_1.StopsUpdateManyMutationInput)
], UpdateManyStopsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereInput_1.StopsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsWhereInput_1.StopsWhereInput)
], UpdateManyStopsArgs.prototype, "where", void 0);
UpdateManyStopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyStopsArgs);
exports.UpdateManyStopsArgs = UpdateManyStopsArgs;
