import { GraphQLResolveInfo } from "graphql";
import { UpdateOneStop_timesArgs } from "./args/UpdateOneStop_timesArgs";
import { Stop_times } from "../../../models/Stop_times";
export declare class UpdateOneStop_timesResolver {
    updateOneStop_times(ctx: any, info: GraphQLResolveInfo, args: UpdateOneStop_timesArgs): Promise<Stop_times | null>;
}
