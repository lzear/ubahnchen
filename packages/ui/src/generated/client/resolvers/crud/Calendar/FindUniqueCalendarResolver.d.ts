import { GraphQLResolveInfo } from "graphql";
import { FindUniqueCalendarArgs } from "./args/FindUniqueCalendarArgs";
import { Calendar } from "../../../models/Calendar";
export declare class FindUniqueCalendarResolver {
    calendar(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCalendarArgs): Promise<Calendar | null>;
}
