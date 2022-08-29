"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopsRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsWhereInput_1 = require("../inputs/StopsWhereInput");
let StopsRelationFilter = class StopsRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereInput_1.StopsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsWhereInput_1.StopsWhereInput)
], StopsRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsWhereInput_1.StopsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StopsWhereInput_1.StopsWhereInput)
], StopsRelationFilter.prototype, "isNot", void 0);
StopsRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("StopsRelationFilter", {
        isAbstract: true
    })
], StopsRelationFilter);
exports.StopsRelationFilter = StopsRelationFilter;
