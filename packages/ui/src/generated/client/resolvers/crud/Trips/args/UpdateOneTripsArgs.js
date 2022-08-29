"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneTripsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsUpdateInput_1 = require("../../../inputs/TripsUpdateInput");
const TripsWhereUniqueInput_1 = require("../../../inputs/TripsWhereUniqueInput");
let UpdateOneTripsArgs = class UpdateOneTripsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsUpdateInput_1.TripsUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsUpdateInput_1.TripsUpdateInput)
], UpdateOneTripsArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsWhereUniqueInput_1.TripsWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsWhereUniqueInput_1.TripsWhereUniqueInput)
], UpdateOneTripsArgs.prototype, "where", void 0);
UpdateOneTripsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneTripsArgs);
exports.UpdateOneTripsArgs = UpdateOneTripsArgs;
