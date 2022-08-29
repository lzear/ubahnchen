import { GraphQLResolveInfo } from "graphql";
import { FindManyStopsArgs } from "./args/FindManyStopsArgs";
import { Stops } from "../../../models/Stops";
export declare class FindManyStopsResolver {
    findManyStops(ctx: any, info: GraphQLResolveInfo, args: FindManyStopsArgs): Promise<Stops[]>;
}
