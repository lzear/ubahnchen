import { GraphQLResolveInfo } from "graphql";
import { UpsertOneStop_timesArgs } from "./args/UpsertOneStop_timesArgs";
import { Stop_times } from "../../../models/Stop_times";
export declare class UpsertOneStop_timesResolver {
    upsertOneStop_times(ctx: any, info: GraphQLResolveInfo, args: UpsertOneStop_timesArgs): Promise<Stop_times>;
}
