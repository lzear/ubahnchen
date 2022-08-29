import { GraphQLResolveInfo } from "graphql";
import { AggregateTripsArgs } from "./args/AggregateTripsArgs";
import { AggregateTrips } from "../../outputs/AggregateTrips";
export declare class AggregateTripsResolver {
    aggregateTrips(ctx: any, info: GraphQLResolveInfo, args: AggregateTripsArgs): Promise<AggregateTrips>;
}
