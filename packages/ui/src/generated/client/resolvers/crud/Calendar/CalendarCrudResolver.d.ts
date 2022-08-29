import { GraphQLResolveInfo } from "graphql";
import { AggregateCalendarArgs } from "./args/AggregateCalendarArgs";
import { CreateOneCalendarArgs } from "./args/CreateOneCalendarArgs";
import { DeleteManyCalendarArgs } from "./args/DeleteManyCalendarArgs";
import { DeleteOneCalendarArgs } from "./args/DeleteOneCalendarArgs";
import { FindFirstCalendarArgs } from "./args/FindFirstCalendarArgs";
import { FindManyCalendarArgs } from "./args/FindManyCalendarArgs";
import { FindUniqueCalendarArgs } from "./args/FindUniqueCalendarArgs";
import { GroupByCalendarArgs } from "./args/GroupByCalendarArgs";
import { UpdateManyCalendarArgs } from "./args/UpdateManyCalendarArgs";
import { UpdateOneCalendarArgs } from "./args/UpdateOneCalendarArgs";
import { UpsertOneCalendarArgs } from "./args/UpsertOneCalendarArgs";
import { Calendar } from "../../../models/Calendar";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCalendar } from "../../outputs/AggregateCalendar";
import { CalendarGroupBy } from "../../outputs/CalendarGroupBy";
export declare class CalendarCrudResolver {
    aggregateCalendar(ctx: any, info: GraphQLResolveInfo, args: AggregateCalendarArgs): Promise<AggregateCalendar>;
    createOneCalendar(ctx: any, info: GraphQLResolveInfo, args: CreateOneCalendarArgs): Promise<Calendar>;
    deleteManyCalendar(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCalendarArgs): Promise<AffectedRowsOutput>;
    deleteOneCalendar(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCalendarArgs): Promise<Calendar | null>;
    findFirstCalendar(ctx: any, info: GraphQLResolveInfo, args: FindFirstCalendarArgs): Promise<Calendar | null>;
    calendars(ctx: any, info: GraphQLResolveInfo, args: FindManyCalendarArgs): Promise<Calendar[]>;
    calendar(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCalendarArgs): Promise<Calendar | null>;
    groupByCalendar(ctx: any, info: GraphQLResolveInfo, args: GroupByCalendarArgs): Promise<CalendarGroupBy[]>;
    updateManyCalendar(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCalendarArgs): Promise<AffectedRowsOutput>;
    updateOneCalendar(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCalendarArgs): Promise<Calendar | null>;
    upsertOneCalendar(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCalendarArgs): Promise<Calendar>;
}
