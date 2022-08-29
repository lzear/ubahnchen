import { GraphQLResolveInfo } from "graphql";
import { FindManyCalendar_datesArgs } from "./args/FindManyCalendar_datesArgs";
import { Calendar_dates } from "../../../models/Calendar_dates";
export declare class FindManyCalendar_datesResolver {
    findManyCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: FindManyCalendar_datesArgs): Promise<Calendar_dates[]>;
}
