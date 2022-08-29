import { GraphQLResolveInfo } from "graphql";
import { FindFirstStopsArgs } from "./args/FindFirstStopsArgs";
import { Stops } from "../../../models/Stops";
export declare class FindFirstStopsResolver {
    findFirstStops(ctx: any, info: GraphQLResolveInfo, args: FindFirstStopsArgs): Promise<Stops | null>;
}
