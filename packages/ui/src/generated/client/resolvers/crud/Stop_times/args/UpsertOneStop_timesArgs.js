"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneStop_timesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesCreateInput_1 = require("../../../inputs/Stop_timesCreateInput");
const Stop_timesUpdateInput_1 = require("../../../inputs/Stop_timesUpdateInput");
const Stop_timesWhereUniqueInput_1 = require("../../../inputs/Stop_timesWhereUniqueInput");
let UpsertOneStop_timesArgs = class UpsertOneStop_timesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput)
], UpsertOneStop_timesArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesCreateInput_1.Stop_timesCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesCreateInput_1.Stop_timesCreateInput)
], UpsertOneStop_timesArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesUpdateInput_1.Stop_timesUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesUpdateInput_1.Stop_timesUpdateInput)
], UpsertOneStop_timesArgs.prototype, "update", void 0);
UpsertOneStop_timesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneStop_timesArgs);
exports.UpsertOneStop_timesArgs = UpsertOneStop_timesArgs;
