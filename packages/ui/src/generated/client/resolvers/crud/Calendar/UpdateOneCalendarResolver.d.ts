import { GraphQLResolveInfo } from "graphql";
import { UpdateOneCalendarArgs } from "./args/UpdateOneCalendarArgs";
import { Calendar } from "../../../models/Calendar";
export declare class UpdateOneCalendarResolver {
    updateOneCalendar(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCalendarArgs): Promise<Calendar | null>;
}
