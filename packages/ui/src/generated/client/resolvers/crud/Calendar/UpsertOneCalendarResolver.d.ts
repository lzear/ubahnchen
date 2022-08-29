import { GraphQLResolveInfo } from "graphql";
import { UpsertOneCalendarArgs } from "./args/UpsertOneCalendarArgs";
import { Calendar } from "../../../models/Calendar";
export declare class UpsertOneCalendarResolver {
    upsertOneCalendar(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCalendarArgs): Promise<Calendar>;
}
