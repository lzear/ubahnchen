import { GraphQLResolveInfo } from "graphql";
import { DeleteOneStopsArgs } from "./args/DeleteOneStopsArgs";
import { Stops } from "../../../models/Stops";
export declare class DeleteOneStopsResolver {
    deleteOneStops(ctx: any, info: GraphQLResolveInfo, args: DeleteOneStopsArgs): Promise<Stops | null>;
}
