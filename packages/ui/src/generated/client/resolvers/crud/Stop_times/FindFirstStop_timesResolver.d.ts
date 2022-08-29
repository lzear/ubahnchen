import { GraphQLResolveInfo } from "graphql";
import { FindFirstStop_timesArgs } from "./args/FindFirstStop_timesArgs";
import { Stop_times } from "../../../models/Stop_times";
export declare class FindFirstStop_timesResolver {
    findFirstStop_times(ctx: any, info: GraphQLResolveInfo, args: FindFirstStop_timesArgs): Promise<Stop_times | null>;
}
