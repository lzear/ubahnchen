import { GraphQLResolveInfo } from "graphql";
import { DeleteManyRoutesArgs } from "./args/DeleteManyRoutesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyRoutesResolver {
    deleteManyRoutes(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRoutesArgs): Promise<AffectedRowsOutput>;
}
