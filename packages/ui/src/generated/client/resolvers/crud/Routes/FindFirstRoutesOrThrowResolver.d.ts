import { GraphQLResolveInfo } from "graphql";
import { FindFirstRoutesOrThrowArgs } from "./args/FindFirstRoutesOrThrowArgs";
import { Routes } from "../../../models/Routes";
export declare class FindFirstRoutesOrThrowResolver {
    findFirstRoutesOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstRoutesOrThrowArgs): Promise<Routes | null>;
}
