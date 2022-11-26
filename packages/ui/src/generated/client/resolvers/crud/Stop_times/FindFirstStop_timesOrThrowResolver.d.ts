import { GraphQLResolveInfo } from "graphql";
import { FindFirstStop_timesOrThrowArgs } from "./args/FindFirstStop_timesOrThrowArgs";
import { Stop_times } from "../../../models/Stop_times";
export declare class FindFirstStop_timesOrThrowResolver {
    findFirstStop_timesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstStop_timesOrThrowArgs): Promise<Stop_times | null>;
}
