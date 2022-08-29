import { GraphQLResolveInfo } from "graphql";
import { DeleteOneTripsArgs } from "./args/DeleteOneTripsArgs";
import { Trips } from "../../../models/Trips";
export declare class DeleteOneTripsResolver {
    deleteOneTrips(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTripsArgs): Promise<Trips | null>;
}
