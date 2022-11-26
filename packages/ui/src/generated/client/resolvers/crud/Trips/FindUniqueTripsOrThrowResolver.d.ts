import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTripsOrThrowArgs } from "./args/FindUniqueTripsOrThrowArgs";
import { Trips } from "../../../models/Trips";
export declare class FindUniqueTripsOrThrowResolver {
    findUniqueTripsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTripsOrThrowArgs): Promise<Trips | null>;
}
