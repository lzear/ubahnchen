import { GraphQLResolveInfo } from "graphql";
import { UpsertOneStopsArgs } from "./args/UpsertOneStopsArgs";
import { Stops } from "../../../models/Stops";
export declare class UpsertOneStopsResolver {
    upsertOneStops(ctx: any, info: GraphQLResolveInfo, args: UpsertOneStopsArgs): Promise<Stops>;
}
