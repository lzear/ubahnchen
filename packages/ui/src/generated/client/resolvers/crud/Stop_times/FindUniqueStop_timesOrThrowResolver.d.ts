import { GraphQLResolveInfo } from "graphql";
import { FindUniqueStop_timesOrThrowArgs } from "./args/FindUniqueStop_timesOrThrowArgs";
import { Stop_times } from "../../../models/Stop_times";
export declare class FindUniqueStop_timesOrThrowResolver {
    findUniqueStop_timesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStop_timesOrThrowArgs): Promise<Stop_times | null>;
}
