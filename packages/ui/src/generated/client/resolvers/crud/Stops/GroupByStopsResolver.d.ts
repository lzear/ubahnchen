import { GraphQLResolveInfo } from "graphql";
import { GroupByStopsArgs } from "./args/GroupByStopsArgs";
import { StopsGroupBy } from "../../outputs/StopsGroupBy";
export declare class GroupByStopsResolver {
    groupByStops(ctx: any, info: GraphQLResolveInfo, args: GroupByStopsArgs): Promise<StopsGroupBy[]>;
}
