"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueStop_timesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesWhereUniqueInput_1 = require("../../../inputs/Stop_timesWhereUniqueInput");
let FindUniqueStop_timesArgs = class FindUniqueStop_timesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereUniqueInput_1.Stop_timesWhereUniqueInput)
], FindUniqueStop_timesArgs.prototype, "where", void 0);
FindUniqueStop_timesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueStop_timesArgs);
exports.FindUniqueStop_timesArgs = FindUniqueStop_timesArgs;
