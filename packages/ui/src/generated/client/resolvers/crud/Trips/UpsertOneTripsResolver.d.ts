import { GraphQLResolveInfo } from "graphql";
import { UpsertOneTripsArgs } from "./args/UpsertOneTripsArgs";
import { Trips } from "../../../models/Trips";
export declare class UpsertOneTripsResolver {
    upsertOneTrips(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTripsArgs): Promise<Trips>;
}
