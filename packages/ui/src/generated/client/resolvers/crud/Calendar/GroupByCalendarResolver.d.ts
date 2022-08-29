import { GraphQLResolveInfo } from "graphql";
import { GroupByCalendarArgs } from "./args/GroupByCalendarArgs";
import { CalendarGroupBy } from "../../outputs/CalendarGroupBy";
export declare class GroupByCalendarResolver {
    groupByCalendar(ctx: any, info: GraphQLResolveInfo, args: GroupByCalendarArgs): Promise<CalendarGroupBy[]>;
}
