import { GraphQLResolveInfo } from "graphql";
import { CreateOneStopsArgs } from "./args/CreateOneStopsArgs";
import { Stops } from "../../../models/Stops";
export declare class CreateOneStopsResolver {
    createOneStops(ctx: any, info: GraphQLResolveInfo, args: CreateOneStopsArgs): Promise<Stops>;
}
