import { GraphQLResolveInfo } from "graphql";
import { FindFirstCalendar_datesArgs } from "./args/FindFirstCalendar_datesArgs";
import { Calendar_dates } from "../../../models/Calendar_dates";
export declare class FindFirstCalendar_datesResolver {
    findFirstCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: FindFirstCalendar_datesArgs): Promise<Calendar_dates | null>;
}
