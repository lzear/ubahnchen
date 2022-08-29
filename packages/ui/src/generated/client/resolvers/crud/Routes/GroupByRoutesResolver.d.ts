import { GraphQLResolveInfo } from "graphql";
import { GroupByRoutesArgs } from "./args/GroupByRoutesArgs";
import { RoutesGroupBy } from "../../outputs/RoutesGroupBy";
export declare class GroupByRoutesResolver {
    groupByRoutes(ctx: any, info: GraphQLResolveInfo, args: GroupByRoutesArgs): Promise<RoutesGroupBy[]>;
}
