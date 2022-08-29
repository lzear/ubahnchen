import { GraphQLResolveInfo } from "graphql";
import { CreateOneCalendarArgs } from "./args/CreateOneCalendarArgs";
import { Calendar } from "../../../models/Calendar";
export declare class CreateOneCalendarResolver {
    createOneCalendar(ctx: any, info: GraphQLResolveInfo, args: CreateOneCalendarArgs): Promise<Calendar>;
}
