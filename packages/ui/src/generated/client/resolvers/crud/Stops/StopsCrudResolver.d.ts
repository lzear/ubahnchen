import { GraphQLResolveInfo } from "graphql";
import { AggregateStopsArgs } from "./args/AggregateStopsArgs";
import { CreateOneStopsArgs } from "./args/CreateOneStopsArgs";
import { DeleteManyStopsArgs } from "./args/DeleteManyStopsArgs";
import { DeleteOneStopsArgs } from "./args/DeleteOneStopsArgs";
import { FindFirstStopsArgs } from "./args/FindFirstStopsArgs";
import { FindManyStopsArgs } from "./args/FindManyStopsArgs";
import { FindUniqueStopsArgs } from "./args/FindUniqueStopsArgs";
import { GroupByStopsArgs } from "./args/GroupByStopsArgs";
import { UpdateManyStopsArgs } from "./args/UpdateManyStopsArgs";
import { UpdateOneStopsArgs } from "./args/UpdateOneStopsArgs";
import { UpsertOneStopsArgs } from "./args/UpsertOneStopsArgs";
import { Stops } from "../../../models/Stops";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateStops } from "../../outputs/AggregateStops";
import { StopsGroupBy } from "../../outputs/StopsGroupBy";
export declare class StopsCrudResolver {
    aggregateStops(ctx: any, info: GraphQLResolveInfo, args: AggregateStopsArgs): Promise<AggregateStops>;
    createOneStops(ctx: any, info: GraphQLResolveInfo, args: CreateOneStopsArgs): Promise<Stops>;
    deleteManyStops(ctx: any, info: GraphQLResolveInfo, args: DeleteManyStopsArgs): Promise<AffectedRowsOutput>;
    deleteOneStops(ctx: any, info: GraphQLResolveInfo, args: DeleteOneStopsArgs): Promise<Stops | null>;
    findFirstStops(ctx: any, info: GraphQLResolveInfo, args: FindFirstStopsArgs): Promise<Stops | null>;
    findManyStops(ctx: any, info: GraphQLResolveInfo, args: FindManyStopsArgs): Promise<Stops[]>;
    findUniqueStops(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStopsArgs): Promise<Stops | null>;
    groupByStops(ctx: any, info: GraphQLResolveInfo, args: GroupByStopsArgs): Promise<StopsGroupBy[]>;
    updateManyStops(ctx: any, info: GraphQLResolveInfo, args: UpdateManyStopsArgs): Promise<AffectedRowsOutput>;
    updateOneStops(ctx: any, info: GraphQLResolveInfo, args: UpdateOneStopsArgs): Promise<Stops | null>;
    upsertOneStops(ctx: any, info: GraphQLResolveInfo, args: UpsertOneStopsArgs): Promise<Stops>;
}
