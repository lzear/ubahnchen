"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTripsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsWhereUniqueInput_1 = require("../../../inputs/TripsWhereUniqueInput");
let FindUniqueTripsArgs = class FindUniqueTripsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereUniqueInput_1.TripsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsWhereUniqueInput_1.TripsWhereUniqueInput)
], FindUniqueTripsArgs.prototype, "where", void 0);
FindUniqueTripsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTripsArgs);
exports.FindUniqueTripsArgs = FindUniqueTripsArgs;
