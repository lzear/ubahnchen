"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyTripsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsWhereInput_1 = require("../../../inputs/TripsWhereInput");
let DeleteManyTripsArgs = class DeleteManyTripsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereInput_1.TripsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TripsWhereInput_1.TripsWhereInput)
], DeleteManyTripsArgs.prototype, "where", void 0);
DeleteManyTripsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyTripsArgs);
exports.DeleteManyTripsArgs = DeleteManyTripsArgs;
