import { GraphQLResolveInfo } from "graphql";
import { CreateOneCalendar_datesArgs } from "./args/CreateOneCalendar_datesArgs";
import { Calendar_dates } from "../../../models/Calendar_dates";
export declare class CreateOneCalendar_datesResolver {
    createOneCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: CreateOneCalendar_datesArgs): Promise<Calendar_dates>;
}
