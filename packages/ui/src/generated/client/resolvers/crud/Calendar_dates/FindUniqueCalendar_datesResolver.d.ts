import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCalendar_datesArgs } from "./args/FindUniqueCalendar_datesArgs";
import { Calendar_dates } from "../../../models/Calendar_dates";
export declare class FindUniqueCalendar_datesResolver {
    findUniqueCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCalendar_datesArgs): Promise<Calendar_dates | null>;
}
