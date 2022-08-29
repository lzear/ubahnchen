import { GraphQLResolveInfo } from "graphql";
import { FindUniqueStop_timesArgs } from "./args/FindUniqueStop_timesArgs";
import { Stop_times } from "../../../models/Stop_times";
export declare class FindUniqueStop_timesResolver {
    findUniqueStop_times(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStop_timesArgs): Promise<Stop_times | null>;
}
