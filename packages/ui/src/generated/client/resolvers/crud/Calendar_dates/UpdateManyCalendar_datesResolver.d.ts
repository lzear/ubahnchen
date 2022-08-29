import { GraphQLResolveInfo } from "graphql";
import { UpdateManyCalendar_datesArgs } from "./args/UpdateManyCalendar_datesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCalendar_datesResolver {
    updateManyCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCalendar_datesArgs): Promise<AffectedRowsOutput>;
}
