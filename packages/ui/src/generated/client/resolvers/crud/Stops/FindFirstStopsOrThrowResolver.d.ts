import { GraphQLResolveInfo } from "graphql";
import { FindFirstStopsOrThrowArgs } from "./args/FindFirstStopsOrThrowArgs";
import { Stops } from "../../../models/Stops";
export declare class FindFirstStopsOrThrowResolver {
    findFirstStopsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstStopsOrThrowArgs): Promise<Stops | null>;
}
