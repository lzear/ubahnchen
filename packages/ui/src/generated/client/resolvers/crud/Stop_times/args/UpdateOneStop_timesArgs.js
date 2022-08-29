"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneStop_timesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesUpdateInput_1 = require("../../../inputs/Stop_timesUpdateInput");
const Stop_timesWhereUniqueInput_1 = require("../../../inputs/Stop_timesWhereUniqueInput");
let UpdateOneStop_timesArgs = class UpdateOneStop_timesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesUpdateInput_1.Stop_timesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesUpdateInput_1.Stop_timesUpdateInput)
], UpdateOneStop_timesArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput)
], UpdateOneStop_timesArgs.prototype, "where", void 0);
UpdateOneStop_timesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneStop_timesArgs);
exports.UpdateOneStop_timesArgs = UpdateOneStop_timesArgs;
