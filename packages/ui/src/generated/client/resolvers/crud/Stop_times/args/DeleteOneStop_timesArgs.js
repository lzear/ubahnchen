"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOneStop_timesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesWhereUniqueInput_1 = require("../../../inputs/Stop_timesWhereUniqueInput");
let DeleteOneStop_timesArgs = class DeleteOneStop_timesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput)
], DeleteOneStop_timesArgs.prototype, "where", void 0);
DeleteOneStop_timesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteOneStop_timesArgs);
exports.DeleteOneStop_timesArgs = DeleteOneStop_timesArgs;
