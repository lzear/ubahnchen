import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCalendar_datesArgs } from "./args/UpsertOneCalendar_datesArgs";
import { Calendar_dates } from "../../../models/Calendar_dates";
export declare class UpsertOneCalendar_datesResolver {
    upsertOneCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCalendar_datesArgs): Promise<Calendar_dates>;
}
