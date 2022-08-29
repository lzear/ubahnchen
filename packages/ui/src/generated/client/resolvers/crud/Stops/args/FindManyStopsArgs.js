"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyStopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsOrderByWithRelationInput_1 = require("../../../inputs/StopsOrderByWithRelationInput");
const StopsWhereInput_1 = require("../../../inputs/StopsWhereInput");
const StopsWhereUniqueInput_1 = require("../../../inputs/StopsWhereUniqueInput");
const StopsScalarFieldEnum_1 = require("../../../../enums/StopsScalarFieldEnum");
let FindManyStopsArgs = class FindManyStopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereInput_1.StopsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsWhereInput_1.StopsWhereInput)
], FindManyStopsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StopsOrderByWithRelationInput_1.StopsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyStopsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereUniqueInput_1.StopsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsWhereUniqueInput_1.StopsWhereUniqueInput)
], FindManyStopsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyStopsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyStopsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StopsScalarFieldEnum_1.StopsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyStopsArgs.prototype, "distinct", void 0);
FindManyStopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyStopsArgs);
exports.FindManyStopsArgs = FindManyStopsArgs;
