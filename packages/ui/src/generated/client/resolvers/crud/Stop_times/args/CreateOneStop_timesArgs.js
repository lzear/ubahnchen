"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneStop_timesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesCreateInput_1 = require("../../../inputs/Stop_timesCreateInput");
let CreateOneStop_timesArgs = class CreateOneStop_timesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesCreateInput_1.Stop_timesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesCreateInput_1.Stop_timesCreateInput)
], CreateOneStop_timesArgs.prototype, "data", void 0);
CreateOneStop_timesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneStop_timesArgs);
exports.CreateOneStop_timesArgs = CreateOneStop_timesArgs;
