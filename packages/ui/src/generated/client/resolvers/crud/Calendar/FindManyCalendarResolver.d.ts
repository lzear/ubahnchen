import { GraphQLResolveInfo } from "graphql";
import { FindManyCalendarArgs } from "./args/FindManyCalendarArgs";
import { Calendar } from "../../../models/Calendar";
export declare class FindManyCalendarResolver {
    calendars(ctx: any, info: GraphQLResolveInfo, args: FindManyCalendarArgs): Promise<Calendar[]>;
}
