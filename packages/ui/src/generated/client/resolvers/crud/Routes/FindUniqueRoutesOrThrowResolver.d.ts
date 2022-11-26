import { GraphQLResolveInfo } from "graphql";
import { FindUniqueRoutesOrThrowArgs } from "./args/FindUniqueRoutesOrThrowArgs";
import { Routes } from "../../../models/Routes";
export declare class FindUniqueRoutesOrThrowResolver {
    findUniqueRoutesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRoutesOrThrowArgs): Promise<Routes | null>;
}
