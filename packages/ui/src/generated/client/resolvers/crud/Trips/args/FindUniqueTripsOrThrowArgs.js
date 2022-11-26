"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueTripsOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsWhereUniqueInput_1 = require("../../../inputs/TripsWhereUniqueInput");
let FindUniqueTripsOrThrowArgs = class FindUniqueTripsOrThrowArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereUniqueInput_1.TripsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsWhereUniqueInput_1.TripsWhereUniqueInput)
], FindUniqueTripsOrThrowArgs.prototype, "where", void 0);
FindUniqueTripsOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueTripsOrThrowArgs);
exports.FindUniqueTripsOrThrowArgs = FindUniqueTripsOrThrowArgs;
