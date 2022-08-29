import { GraphQLResolveInfo } from "graphql";
import { DeleteOneStop_timesArgs } from "./args/DeleteOneStop_timesArgs";
import { Stop_times } from "../../../models/Stop_times";
export declare class DeleteOneStop_timesResolver {
    deleteOneStop_times(ctx: any, info: GraphQLResolveInfo, args: DeleteOneStop_timesArgs): Promise<Stop_times | null>;
}
