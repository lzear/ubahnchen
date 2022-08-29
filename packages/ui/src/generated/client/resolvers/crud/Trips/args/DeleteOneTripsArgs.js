"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneTripsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsWhereUniqueInput_1 = require("../../../inputs/TripsWhereUniqueInput");
let DeleteOneTripsArgs = class DeleteOneTripsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereUniqueInput_1.TripsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsWhereUniqueInput_1.TripsWhereUniqueInput)
], DeleteOneTripsArgs.prototype, "where", void 0);
DeleteOneTripsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneTripsArgs);
exports.DeleteOneTripsArgs = DeleteOneTripsArgs;
