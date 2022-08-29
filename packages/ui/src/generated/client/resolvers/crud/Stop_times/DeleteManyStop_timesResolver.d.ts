import { GraphQLResolveInfo } from "graphql";
import { DeleteManyStop_timesArgs } from "./args/DeleteManyStop_timesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyStop_timesResolver {
    deleteManyStop_times(ctx: any, info: GraphQLResolveInfo, args: DeleteManyStop_timesArgs): Promise<AffectedRowsOutput>;
}
