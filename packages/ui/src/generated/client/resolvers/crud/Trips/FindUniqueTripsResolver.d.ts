import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTripsArgs } from "./args/FindUniqueTripsArgs";
import { Trips } from "../../../models/Trips";
export declare class FindUniqueTripsResolver {
    findUniqueTrips(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTripsArgs): Promise<Trips | null>;
}
