import { GraphQLResolveInfo } from "graphql";
import { DeleteManyCalendar_datesArgs } from "./args/DeleteManyCalendar_datesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCalendar_datesResolver {
    deleteManyCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCalendar_datesArgs): Promise<AffectedRowsOutput>;
}
