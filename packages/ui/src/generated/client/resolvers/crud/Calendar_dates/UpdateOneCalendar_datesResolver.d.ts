import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCalendar_datesArgs } from "./args/UpdateOneCalendar_datesArgs";
import { Calendar_dates } from "../../../models/Calendar_dates";
export declare class UpdateOneCalendar_datesResolver {
    updateOneCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCalendar_datesArgs): Promise<Calendar_dates | null>;
}
