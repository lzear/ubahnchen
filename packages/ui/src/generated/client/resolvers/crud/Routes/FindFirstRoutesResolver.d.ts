import { GraphQLResolveInfo } from "graphql";
import { FindFirstRoutesArgs } from "./args/FindFirstRoutesArgs";
import { Routes } from "../../../models/Routes";
export declare class FindFirstRoutesResolver {
    findFirstRoutes(ctx: any, info: GraphQLResolveInfo, args: FindFirstRoutesArgs): Promise<Routes | null>;
}
