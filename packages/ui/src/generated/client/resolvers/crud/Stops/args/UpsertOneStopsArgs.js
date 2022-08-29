"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneStopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsCreateInput_1 = require("../../../inputs/StopsCreateInput");
const StopsUpdateInput_1 = require("../../../inputs/StopsUpdateInput");
const StopsWhereUniqueInput_1 = require("../../../inputs/StopsWhereUniqueInput");
let UpsertOneStopsArgs = class UpsertOneStopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereUniqueInput_1.StopsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsWhereUniqueInput_1.StopsWhereUniqueInput)
], UpsertOneStopsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCreateInput_1.StopsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsCreateInput_1.StopsCreateInput)
], UpsertOneStopsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsUpdateInput_1.StopsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsUpdateInput_1.StopsUpdateInput)
], UpsertOneStopsArgs.prototype, "update", void 0);
UpsertOneStopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneStopsArgs);
exports.UpsertOneStopsArgs = UpsertOneStopsArgs;
