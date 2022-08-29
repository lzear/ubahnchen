import { GraphQLResolveInfo } from "graphql";
import { CreateOneTripsArgs } from "./args/CreateOneTripsArgs";
import { Trips } from "../../../models/Trips";
export declare class CreateOneTripsResolver {
    createOneTrips(ctx: any, info: GraphQLResolveInfo, args: CreateOneTripsArgs): Promise<Trips>;
}
