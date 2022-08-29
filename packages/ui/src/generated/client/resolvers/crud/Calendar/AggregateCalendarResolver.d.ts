import { GraphQLResolveInfo } from "graphql";
import { AggregateCalendarArgs } from "./args/AggregateCalendarArgs";
import { AggregateCalendar } from "../../outputs/AggregateCalendar";
export declare class AggregateCalendarResolver {
    aggregateCalendar(ctx: any, info: GraphQLResolveInfo, args: AggregateCalendarArgs): Promise<AggregateCalendar>;
}
