import { GraphQLResolveInfo } from "graphql";
import { UpdateOneRoutesArgs } from "./args/UpdateOneRoutesArgs";
import { Routes } from "../../../models/Routes";
export declare class UpdateOneRoutesResolver {
    updateOneRoutes(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRoutesArgs): Promise<Routes | null>;
}
