"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateStopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsOrderByWithRelationInput_1 = require("../../../inputs/StopsOrderByWithRelationInput");
const StopsWhereInput_1 = require("../../../inputs/StopsWhereInput");
const StopsWhereUniqueInput_1 = require("../../../inputs/StopsWhereUniqueInput");
let AggregateStopsArgs = class AggregateStopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereInput_1.StopsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsWhereInput_1.StopsWhereInput)
], AggregateStopsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [StopsOrderByWithRelationInput_1.StopsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateStopsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereUniqueInput_1.StopsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsWhereUniqueInput_1.StopsWhereUniqueInput)
], AggregateStopsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateStopsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateStopsArgs.prototype, "skip", void 0);
AggregateStopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateStopsArgs);
exports.AggregateStopsArgs = AggregateStopsArgs;
