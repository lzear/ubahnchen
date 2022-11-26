import { GraphQLResolveInfo } from "graphql";
import { FindFirstTripsOrThrowArgs } from "./args/FindFirstTripsOrThrowArgs";
import { Trips } from "../../../models/Trips";
export declare class FindFirstTripsOrThrowResolver {
    findFirstTripsOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTripsOrThrowArgs): Promise<Trips | null>;
}
