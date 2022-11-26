"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCalendarResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateCalendarArgs_1 = require("./args/AggregateCalendarArgs");
const Calendar_1 = require("../../../models/Calendar");
const AggregateCalendar_1 = require("../../outputs/AggregateCalendar");
const helpers_1 = require("../../../helpers");
let AggregateCalendarResolver = class AggregateCalendarResolver {
    async aggregateCalendar(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateCalendar_1.AggregateCalendar, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateCalendarArgs_1.AggregateCalendarArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateCalendarResolver.prototype, "aggregateCalendar", null);
AggregateCalendarResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_1.Calendar)
], AggregateCalendarResolver);
exports.AggregateCalendarResolver = AggregateCalendarResolver;
