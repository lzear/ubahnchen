"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneStopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsUpdateInput_1 = require("../../../inputs/StopsUpdateInput");
const StopsWhereUniqueInput_1 = require("../../../inputs/StopsWhereUniqueInput");
let UpdateOneStopsArgs = class UpdateOneStopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsUpdateInput_1.StopsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsUpdateInput_1.StopsUpdateInput)
], UpdateOneStopsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereUniqueInput_1.StopsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsWhereUniqueInput_1.StopsWhereUniqueInput)
], UpdateOneStopsArgs.prototype, "where", void 0);
UpdateOneStopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneStopsArgs);
exports.UpdateOneStopsArgs = UpdateOneStopsArgs;
