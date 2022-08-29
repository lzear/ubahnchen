"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneStopsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const StopsCreateInput_1 = require("../../../inputs/StopsCreateInput");
let CreateOneStopsArgs = class CreateOneStopsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StopsCreateInput_1.StopsCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", StopsCreateInput_1.StopsCreateInput)
], CreateOneStopsArgs.prototype, "data", void 0);
CreateOneStopsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneStopsArgs);
exports.CreateOneStopsArgs = CreateOneStopsArgs;
