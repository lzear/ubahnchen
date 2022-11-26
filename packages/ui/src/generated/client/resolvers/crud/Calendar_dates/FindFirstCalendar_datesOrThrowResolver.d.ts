import { GraphQLResolveInfo } from "graphql";
import { FindFirstCalendar_datesOrThrowArgs } from "./args/FindFirstCalendar_datesOrThrowArgs";
import { Calendar_dates } from "../../../models/Calendar_dates";
export declare class FindFirstCalendar_datesOrThrowResolver {
    findFirstCalendar_datesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCalendar_datesOrThrowArgs): Promise<Calendar_dates | null>;
}
