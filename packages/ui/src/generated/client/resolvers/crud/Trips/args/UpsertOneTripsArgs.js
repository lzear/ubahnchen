"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneTripsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsCreateInput_1 = require("../../../inputs/TripsCreateInput");
const TripsUpdateInput_1 = require("../../../inputs/TripsUpdateInput");
const TripsWhereUniqueInput_1 = require("../../../inputs/TripsWhereUniqueInput");
let UpsertOneTripsArgs = class UpsertOneTripsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereUniqueInput_1.TripsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsWhereUniqueInput_1.TripsWhereUniqueInput)
], UpsertOneTripsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCreateInput_1.TripsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsCreateInput_1.TripsCreateInput)
], UpsertOneTripsArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsUpdateInput_1.TripsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsUpdateInput_1.TripsUpdateInput)
], UpsertOneTripsArgs.prototype, "update", void 0);
UpsertOneTripsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneTripsArgs);
exports.UpsertOneTripsArgs = UpsertOneTripsArgs;
