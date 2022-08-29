"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyStop_timesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesUpdateManyMutationInput_1 = require("../../../inputs/Stop_timesUpdateManyMutationInput");
const Stop_timesWhereInput_1 = require("../../../inputs/Stop_timesWhereInput");
let UpdateManyStop_timesArgs = class UpdateManyStop_timesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesUpdateManyMutationInput_1.Stop_timesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesUpdateManyMutationInput_1.Stop_timesUpdateManyMutationInput)
], UpdateManyStop_timesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereInput_1.Stop_timesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereInput_1.Stop_timesWhereInput)
], UpdateManyStop_timesArgs.prototype, "where", void 0);
UpdateManyStop_timesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyStop_timesArgs);
exports.UpdateManyStop_timesArgs = UpdateManyStop_timesArgs;
