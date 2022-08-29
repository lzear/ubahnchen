import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRoutesArgs } from "./args/FindUniqueRoutesArgs";
import { Routes } from "../../../models/Routes";
export declare class FindUniqueRoutesResolver {
    findUniqueRoutes(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRoutesArgs): Promise<Routes | null>;
}
