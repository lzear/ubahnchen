import { GraphQLResolveInfo } from "graphql";
import { UpdateManyRoutesArgs } from "./args/UpdateManyRoutesArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyRoutesResolver {
    updateManyRoutes(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRoutesArgs): Promise<AffectedRowsOutput>;
}
