import { GraphQLResolveInfo } from "graphql";
import { FindFirstTripsArgs } from "./args/FindFirstTripsArgs";
import { Trips } from "../../../models/Trips";
export declare class FindFirstTripsResolver {
    findFirstTrips(ctx: any, info: GraphQLResolveInfo, args: FindFirstTripsArgs): Promise<Trips | null>;
}
