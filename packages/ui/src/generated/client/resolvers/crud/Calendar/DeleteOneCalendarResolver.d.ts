import { GraphQLResolveInfo } from "graphql";
import { DeleteOneCalendarArgs } from "./args/DeleteOneCalendarArgs";
import { Calendar } from "../../../models/Calendar";
export declare class DeleteOneCalendarResolver {
    deleteOneCalendar(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCalendarArgs): Promise<Calendar | null>;
}
