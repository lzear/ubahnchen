import { GraphQLResolveInfo } from "graphql";
import { AggregateRoutesArgs } from "./args/AggregateRoutesArgs";
import { AggregateRoutes } from "../../outputs/AggregateRoutes";
export declare class AggregateRoutesResolver {
    aggregateRoutes(ctx: any, info: GraphQLResolveInfo, args: AggregateRoutesArgs): Promise<AggregateRoutes>;
}
