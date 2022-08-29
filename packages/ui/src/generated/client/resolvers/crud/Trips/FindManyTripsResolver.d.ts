import { GraphQLResolveInfo } from "graphql";
import { FindManyTripsArgs } from "./args/FindManyTripsArgs";
import { Trips } from "../../../models/Trips";
export declare class FindManyTripsResolver {
    findManyTrips(ctx: any, info: GraphQLResolveInfo, args: FindManyTripsArgs): Promise<Trips[]>;
}
