import { GraphQLResolveInfo } from "graphql";
import { DeleteManyStopsArgs } from "./args/DeleteManyStopsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyStopsResolver {
    deleteManyStops(ctx: any, info: GraphQLResolveInfo, args: DeleteManyStopsArgs): Promise<AffectedRowsOutput>;
}
