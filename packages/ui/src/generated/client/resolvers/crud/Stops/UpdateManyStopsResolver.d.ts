import { GraphQLResolveInfo } from "graphql";
import { UpdateManyStopsArgs } from "./args/UpdateManyStopsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyStopsResolver {
    updateManyStops(ctx: any, info: GraphQLResolveInfo, args: UpdateManyStopsArgs): Promise<AffectedRowsOutput>;
}
