import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCalendarOrThrowArgs } from "./args/FindUniqueCalendarOrThrowArgs";
import { Calendar } from "../../../models/Calendar";
export declare class FindUniqueCalendarOrThrowResolver {
    getCalendar(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCalendarOrThrowArgs): Promise<Calendar | null>;
}
