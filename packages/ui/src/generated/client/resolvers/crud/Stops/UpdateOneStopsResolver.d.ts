import { GraphQLResolveInfo } from "graphql";
import { UpdateOneStopsArgs } from "./args/UpdateOneStopsArgs";
import { Stops } from "../../../models/Stops";
export declare class UpdateOneStopsResolver {
    updateOneStops(ctx: any, info: GraphQLResolveInfo, args: UpdateOneStopsArgs): Promise<Stops | null>;
}
