import { GraphQLResolveInfo } from "graphql";
import { UpdateOneTripsArgs } from "./args/UpdateOneTripsArgs";
import { Trips } from "../../../models/Trips";
export declare class UpdateOneTripsResolver {
    updateOneTrips(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTripsArgs): Promise<Trips | null>;
}
