import { GraphQLResolveInfo } from "graphql";
import { AggregateTripsArgs } from "./args/AggregateTripsArgs";
import { CreateOneTripsArgs } from "./args/CreateOneTripsArgs";
import { DeleteManyTripsArgs } from "./args/DeleteManyTripsArgs";
import { DeleteOneTripsArgs } from "./args/DeleteOneTripsArgs";
import { FindFirstTripsArgs } from "./args/FindFirstTripsArgs";
import { FindManyTripsArgs } from "./args/FindManyTripsArgs";
import { FindUniqueTripsArgs } from "./args/FindUniqueTripsArgs";
import { GroupByTripsArgs } from "./args/GroupByTripsArgs";
import { UpdateManyTripsArgs } from "./args/UpdateManyTripsArgs";
import { UpdateOneTripsArgs } from "./args/UpdateOneTripsArgs";
import { UpsertOneTripsArgs } from "./args/UpsertOneTripsArgs";
import { Trips } from "../../../models/Trips";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTrips } from "../../outputs/AggregateTrips";
import { TripsGroupBy } from "../../outputs/TripsGroupBy";
export declare class TripsCrudResolver {
    aggregateTrips(ctx: any, info: GraphQLResolveInfo, args: AggregateTripsArgs): Promise<AggregateTrips>;
    createOneTrips(ctx: any, info: GraphQLResolveInfo, args: CreateOneTripsArgs): Promise<Trips>;
    deleteManyTrips(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTripsArgs): Promise<AffectedRowsOutput>;
    deleteOneTrips(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTripsArgs): Promise<Trips | null>;
    findFirstTrips(ctx: any, info: GraphQLResolveInfo, args: FindFirstTripsArgs): Promise<Trips | null>;
    findManyTrips(ctx: any, info: GraphQLResolveInfo, args: FindManyTripsArgs): Promise<Trips[]>;
    findUniqueTrips(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTripsArgs): Promise<Trips | null>;
    groupByTrips(ctx: any, info: GraphQLResolveInfo, args: GroupByTripsArgs): Promise<TripsGroupBy[]>;
    updateManyTrips(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTripsArgs): Promise<AffectedRowsOutput>;
    updateOneTrips(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTripsArgs): Promise<Trips | null>;
    upsertOneTrips(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTripsArgs): Promise<Trips>;
}
