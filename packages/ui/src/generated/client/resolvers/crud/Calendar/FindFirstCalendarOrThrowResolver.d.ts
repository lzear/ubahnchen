import { GraphQLResolveInfo } from "graphql";
import { FindFirstCalendarOrThrowArgs } from "./args/FindFirstCalendarOrThrowArgs";
import { Calendar } from "../../../models/Calendar";
export declare class FindFirstCalendarOrThrowResolver {
    findFirstCalendarOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCalendarOrThrowArgs): Promise<Calendar | null>;
}
