import { GraphQLResolveInfo } from "graphql";
import { CreateOneStop_timesArgs } from "./args/CreateOneStop_timesArgs";
import { Stop_times } from "../../../models/Stop_times";
export declare class CreateOneStop_timesResolver {
    createOneStop_times(ctx: any, info: GraphQLResolveInfo, args: CreateOneStop_timesArgs): Promise<Stop_times>;
}
