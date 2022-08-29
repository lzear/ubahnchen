import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCalendar_datesArgs } from "./args/DeleteOneCalendar_datesArgs";
import { Calendar_dates } from "../../../models/Calendar_dates";
export declare class DeleteOneCalendar_datesResolver {
    deleteOneCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCalendar_datesArgs): Promise<Calendar_dates | null>;
}
