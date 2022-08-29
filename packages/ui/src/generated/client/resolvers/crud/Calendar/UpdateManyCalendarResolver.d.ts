import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCalendarArgs } from "./args/UpdateManyCalendarArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCalendarResolver {
    updateManyCalendar(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCalendarArgs): Promise<AffectedRowsOutput>;
}
