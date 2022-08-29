import { GraphQLResolveInfo } from "graphql";
import { UpdateManyStop_timesArgs } from "./args/UpdateManyStop_timesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyStop_timesResolver {
    updateManyStop_times(ctx: any, info: GraphQLResolveInfo, args: UpdateManyStop_timesArgs): Promise<AffectedRowsOutput>;
}
