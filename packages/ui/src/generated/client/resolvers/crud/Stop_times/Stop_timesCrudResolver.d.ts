import { GraphQLResolveInfo } from "graphql";
import { AggregateStop_timesArgs } from "./args/AggregateStop_timesArgs";
import { CreateOneStop_timesArgs } from "./args/CreateOneStop_timesArgs";
import { DeleteManyStop_timesArgs } from "./args/DeleteManyStop_timesArgs";
import { DeleteOneStop_timesArgs } from "./args/DeleteOneStop_timesArgs";
import { FindFirstStop_timesArgs } from "./args/FindFirstStop_timesArgs";
import { FindManyStop_timesArgs } from "./args/FindManyStop_timesArgs";
import { FindUniqueStop_timesArgs } from "./args/FindUniqueStop_timesArgs";
import { GroupByStop_timesArgs } from "./args/GroupByStop_timesArgs";
import { UpdateManyStop_timesArgs } from "./args/UpdateManyStop_timesArgs";
import { UpdateOneStop_timesArgs } from "./args/UpdateOneStop_timesArgs";
import { UpsertOneStop_timesArgs } from "./args/UpsertOneStop_timesArgs";
import { Stop_times } from "../../../models/Stop_times";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateStop_times } from "../../outputs/AggregateStop_times";
import { Stop_timesGroupBy } from "../../outputs/Stop_timesGroupBy";
export declare class Stop_timesCrudResolver {
    aggregateStop_times(ctx: any, info: GraphQLResolveInfo, args: AggregateStop_timesArgs): Promise<AggregateStop_times>;
    createOneStop_times(ctx: any, info: GraphQLResolveInfo, args: CreateOneStop_timesArgs): Promise<Stop_times>;
    deleteManyStop_times(ctx: any, info: GraphQLResolveInfo, args: DeleteManyStop_timesArgs): Promise<AffectedRowsOutput>;
    deleteOneStop_times(ctx: any, info: GraphQLResolveInfo, args: DeleteOneStop_timesArgs): Promise<Stop_times | null>;
    findFirstStop_times(ctx: any, info: GraphQLResolveInfo, args: FindFirstStop_timesArgs): Promise<Stop_times | null>;
    findManyStop_times(ctx: any, info: GraphQLResolveInfo, args: FindManyStop_timesArgs): Promise<Stop_times[]>;
    findUniqueStop_times(ctx: any, info: GraphQLResolveInfo, args: FindUniqueStop_timesArgs): Promise<Stop_times | null>;
    groupByStop_times(ctx: any, info: GraphQLResolveInfo, args: GroupByStop_timesArgs): Promise<Stop_timesGroupBy[]>;
    updateManyStop_times(ctx: any, info: GraphQLResolveInfo, args: UpdateManyStop_timesArgs): Promise<AffectedRowsOutput>;
    updateOneStop_times(ctx: any, info: GraphQLResolveInfo, args: UpdateOneStop_timesArgs): Promise<Stop_times | null>;
    upsertOneStop_times(ctx: any, info: GraphQLResolveInfo, args: UpsertOneStop_timesArgs): Promise<Stop_times>;
}
