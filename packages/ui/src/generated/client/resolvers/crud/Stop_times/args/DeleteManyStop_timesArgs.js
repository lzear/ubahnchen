"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyStop_timesArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Stop_timesWhereInput_1 = require("../../../inputs/Stop_timesWhereInput");
let DeleteManyStop_timesArgs = class DeleteManyStop_timesArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Stop_timesWhereInput_1.Stop_timesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Stop_timesWhereInput_1.Stop_timesWhereInput)
], DeleteManyStop_timesArgs.prototype, "where", void 0);
DeleteManyStop_timesArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyStop_timesArgs);
exports.DeleteManyStop_timesArgs = DeleteManyStop_timesArgs;
