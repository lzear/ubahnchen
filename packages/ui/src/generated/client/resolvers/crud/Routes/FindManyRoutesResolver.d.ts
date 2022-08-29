import { GraphQLResolveInfo } from "graphql";
import { FindManyRoutesArgs } from "./args/FindManyRoutesArgs";
import { Routes } from "../../../models/Routes";
export declare class FindManyRoutesResolver {
    findManyRoutes(ctx: any, info: GraphQLResolveInfo, args: FindManyRoutesArgs): Promise<Routes[]>;
}
