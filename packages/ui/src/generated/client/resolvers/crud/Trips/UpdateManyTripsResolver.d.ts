import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTripsArgs } from "./args/UpdateManyTripsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTripsResolver {
    updateManyTrips(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTripsArgs): Promise<AffectedRowsOutput>;
}
