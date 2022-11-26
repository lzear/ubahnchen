"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneCalendar_datesResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneCalendar_datesArgs_1 = require("./args/CreateOneCalendar_datesArgs");
const Calendar_dates_1 = require("../../../models/Calendar_dates");
const helpers_1 = require("../../../helpers");
let CreateOneCalendar_datesResolver = class CreateOneCalendar_datesResolver {
    async createOneCalendar_dates(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).calendar_dates.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Calendar_dates_1.Calendar_dates, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneCalendar_datesArgs_1.CreateOneCalendar_datesArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneCalendar_datesResolver.prototype, "createOneCalendar_dates", null);
CreateOneCalendar_datesResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Calendar_dates_1.Calendar_dates)
], CreateOneCalendar_datesResolver);
exports.CreateOneCalendar_datesResolver = CreateOneCalendar_datesResolver;
