import { GraphQLResolveInfo } from "graphql";
import { GroupByCalendar_datesArgs } from "./args/GroupByCalendar_datesArgs";
import { Calendar_datesGroupBy } from "../../outputs/Calendar_datesGroupBy";
export declare class GroupByCalendar_datesResolver {
    groupByCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: GroupByCalendar_datesArgs): Promise<Calendar_datesGroupBy[]>;
}
