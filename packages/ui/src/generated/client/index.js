"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.relationResolvers = exports.crudResolvers = void 0;
const tslib_1 = require("tslib");
const crudResolversImport = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const relationResolversImport = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
tslib_1.__exportStar(require("./enums"), exports);
tslib_1.__exportStar(require("./models"), exports);
tslib_1.__exportStar(require("./resolvers/crud"), exports);
exports.crudResolvers = Object.values(crudResolversImport);
tslib_1.__exportStar(require("./resolvers/relations"), exports);
exports.relationResolvers = Object.values(relationResolversImport);
tslib_1.__exportStar(require("./resolvers/inputs"), exports);
tslib_1.__exportStar(require("./resolvers/outputs"), exports);
tslib_1.__exportStar(require("./enhance"), exports);
tslib_1.__exportStar(require("./scalars"), exports);
exports.resolvers = [
    ...exports.crudResolvers,
    ...exports.relationResolvers,
];
