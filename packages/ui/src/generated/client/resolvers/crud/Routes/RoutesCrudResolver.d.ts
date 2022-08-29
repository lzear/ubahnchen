import { GraphQLResolveInfo } from "graphql";
import { AggregateRoutesArgs } from "./args/AggregateRoutesArgs";
import { CreateOneRoutesArgs } from "./args/CreateOneRoutesArgs";
import { DeleteManyRoutesArgs } from "./args/DeleteManyRoutesArgs";
import { DeleteOneRoutesArgs } from "./args/DeleteOneRoutesArgs";
import { FindFirstRoutesArgs } from "./args/FindFirstRoutesArgs";
import { FindManyRoutesArgs } from "./args/FindManyRoutesArgs";
import { FindUniqueRoutesArgs } from "./args/FindUniqueRoutesArgs";
import { GroupByRoutesArgs } from "./args/GroupByRoutesArgs";
import { UpdateManyRoutesArgs } from "./args/UpdateManyRoutesArgs";
import { UpdateOneRoutesArgs } from "./args/UpdateOneRoutesArgs";
import { UpsertOneRoutesArgs } from "./args/UpsertOneRoutesArgs";
import { Routes } from "../../../models/Routes";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRoutes } from "../../outputs/AggregateRoutes";
import { RoutesGroupBy } from "../../outputs/RoutesGroupBy";
export declare class RoutesCrudResolver {
    aggregateRoutes(ctx: any, info: GraphQLResolveInfo, args: AggregateRoutesArgs): Promise<AggregateRoutes>;
    createOneRoutes(ctx: any, info: GraphQLResolveInfo, args: CreateOneRoutesArgs): Promise<Routes>;
    deleteManyRoutes(ctx: any, info: GraphQLResolveInfo, args: DeleteManyRoutesArgs): Promise<AffectedRowsOutput>;
    deleteOneRoutes(ctx: any, info: GraphQLResolveInfo, args: DeleteOneRoutesArgs): Promise<Routes | null>;
    findFirstRoutes(ctx: any, info: GraphQLResolveInfo, args: FindFirstRoutesArgs): Promise<Routes | null>;
    findManyRoutes(ctx: any, info: GraphQLResolveInfo, args: FindManyRoutesArgs): Promise<Routes[]>;
    findUniqueRoutes(ctx: any, info: GraphQLResolveInfo, args: FindUniqueRoutesArgs): Promise<Routes | null>;
    groupByRoutes(ctx: any, info: GraphQLResolveInfo, args: GroupByRoutesArgs): Promise<RoutesGroupBy[]>;
    updateManyRoutes(ctx: any, info: GraphQLResolveInfo, args: UpdateManyRoutesArgs): Promise<AffectedRowsOutput>;
    updateOneRoutes(ctx: any, info: GraphQLResolveInfo, args: UpdateOneRoutesArgs): Promise<Routes | null>;
    upsertOneRoutes(ctx: any, info: GraphQLResolveInfo, args: UpsertOneRoutesArgs): Promise<Routes>;
}
