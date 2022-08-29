import { GraphQLResolveInfo } from "graphql";
import { DeleteOneRoutesArgs } from "./args/DeleteOneRoutesArgs";
import { Routes } from "../../../models/Routes";
export declare class DeleteOneRoutesResolver {
    deleteOneRoutes(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRoutesArgs): Promise<Routes | null>;
}
