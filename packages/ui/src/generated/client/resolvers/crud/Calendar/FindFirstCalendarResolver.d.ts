import { GraphQLResolveInfo } from "graphql";
import { FindFirstCalendarArgs } from "./args/FindFirstCalendarArgs";
import { Calendar } from "../../../models/Calendar";
export declare class FindFirstCalendarResolver {
    findFirstCalendar(ctx: any, info: GraphQLResolveInfo, args: FindFirstCalendarArgs): Promise<Calendar | null>;
}
