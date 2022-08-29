import { GraphQLResolveInfo } from "graphql";
import { AggregateCalendar_datesArgs } from "./args/AggregateCalendar_datesArgs";
import { AggregateCalendar_dates } from "../../outputs/AggregateCalendar_dates";
export declare class AggregateCalendar_datesResolver {
    aggregateCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: AggregateCalendar_datesArgs): Promise<AggregateCalendar_dates>;
}
