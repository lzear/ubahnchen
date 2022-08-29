import { GraphQLResolveInfo } from "graphql";
import { GroupByTripsArgs } from "./args/GroupByTripsArgs";
import { TripsGroupBy } from "../../outputs/TripsGroupBy";
export declare class GroupByTripsResolver {
    groupByTrips(ctx: any, info: GraphQLResolveInfo, args: GroupByTripsArgs): Promise<TripsGroupBy[]>;
}
