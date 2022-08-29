import { GraphQLResolveInfo } from "graphql";
import { CreateOneRoutesArgs } from "./args/CreateOneRoutesArgs";
import { Routes } from "../../../models/Routes";
export declare class CreateOneRoutesResolver {
    createOneRoutes(ctx: any, info: GraphQLResolveInfo, args: CreateOneRoutesArgs): Promise<Routes>;
}
