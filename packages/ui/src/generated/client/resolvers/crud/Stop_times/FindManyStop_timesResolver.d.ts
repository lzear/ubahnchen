import { GraphQLResolveInfo } from "graphql";
import { FindManyStop_timesArgs } from "./args/FindManyStop_timesArgs";
import { Stop_times } from "../../../models/Stop_times";
export declare class FindManyStop_timesResolver {
    findManyStop_times(ctx: any, info: GraphQLResolveInfo, args: FindManyStop_timesArgs): Promise<Stop_times[]>;
}
