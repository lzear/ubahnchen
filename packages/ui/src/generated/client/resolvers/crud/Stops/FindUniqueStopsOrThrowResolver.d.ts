import { GraphQLResolveInfo } from "graphql";
import { FindUniqueStopsOrThrowArgs } from "./args/FindUniqueStopsOrThrowArgs";
import { Stops } from "../../../models/Stops";
export declare class FindUniqueStopsOrThrowResolver {
    findUniqueStopsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStopsOrThrowArgs): Promise<Stops | null>;
}
