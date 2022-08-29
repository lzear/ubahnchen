"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneTripsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TripsCreateInput_1 = require("../../../inputs/TripsCreateInput");
let CreateOneTripsArgs = class CreateOneTripsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TripsCreateInput_1.TripsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TripsCreateInput_1.TripsCreateInput)
], CreateOneTripsArgs.prototype, "data", void 0);
CreateOneTripsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneTripsArgs);
exports.CreateOneTripsArgs = CreateOneTripsArgs;
