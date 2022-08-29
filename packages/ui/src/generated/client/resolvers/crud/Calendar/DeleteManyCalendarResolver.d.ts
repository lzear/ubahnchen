import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCalendarArgs } from "./args/DeleteManyCalendarArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCalendarResolver {
    deleteManyCalendar(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCalendarArgs): Promise<AffectedRowsOutput>;
}
