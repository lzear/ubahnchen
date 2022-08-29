import { GraphQLResolveInfo } from "graphql";
import { FindUniqueStopsArgs } from "./args/FindUniqueStopsArgs";
import { Stops } from "../../../models/Stops";
export declare class FindUniqueStopsResolver {
    findUniqueStops(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStopsArgs): Promise<Stops | null>;
}
