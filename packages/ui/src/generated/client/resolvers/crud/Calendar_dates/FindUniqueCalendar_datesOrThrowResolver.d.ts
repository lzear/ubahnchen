import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCalendar_datesOrThrowArgs } from "./args/FindUniqueCalendar_datesOrThrowArgs";
import { Calendar_dates } from "../../../models/Calendar_dates";
export declare class FindUniqueCalendar_datesOrThrowResolver {
    findUniqueCalendar_datesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCalendar_datesOrThrowArgs): Promise<Calendar_dates | null>;
}
