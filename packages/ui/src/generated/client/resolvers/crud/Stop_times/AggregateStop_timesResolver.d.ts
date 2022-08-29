import { GraphQLResolveInfo } from "graphql";
import { AggregateStop_timesArgs } from "./args/AggregateStop_timesArgs";
import { AggregateStop_times } from "../../outputs/AggregateStop_times";
export declare class AggregateStop_timesResolver {
    aggregateStop_times(ctx: any, info: GraphQLResolveInfo, args: AggregateStop_timesArgs): Promise<AggregateStop_times>;
}
