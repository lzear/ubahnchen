import { GraphQLResolveInfo } from "graphql";
import { UpsertOneRoutesArgs } from "./args/UpsertOneRoutesArgs";
import { Routes } from "../../../models/Routes";
export declare class UpsertOneRoutesResolver {
    upsertOneRoutes(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRoutesArgs): Promise<Routes>;
}
