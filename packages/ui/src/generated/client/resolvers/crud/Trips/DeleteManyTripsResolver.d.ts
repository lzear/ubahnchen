import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTripsArgs } from "./args/DeleteManyTripsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTripsResolver {
    deleteManyTrips(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTripsArgs): Promise<AffectedRowsOutput>;
}
