import { GraphQLResolveInfo } from "graphql";
import { AggregateStopsArgs } from "./args/AggregateStopsArgs";
import { AggregateStops } from "../../outputs/AggregateStops";
export declare class AggregateStopsResolver {
    aggregateStops(ctx: any, info: GraphQLResolveInfo, args: AggregateStopsArgs): Promise<AggregateStops>;
}
