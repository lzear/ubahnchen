import { GraphQLResolveInfo } from "graphql";
import { GroupByStop_timesArgs } from "./args/GroupByStop_timesArgs";
import { Stop_timesGroupBy } from "../../outputs/Stop_timesGroupBy";
export declare class GroupByStop_timesResolver {
    groupByStop_times(ctx: any, info: GraphQLResolveInfo, args: GroupByStop_timesArgs): Promise<Stop_timesGroupBy[]>;
}
