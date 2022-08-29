import { GraphQLResolveInfo } from "graphql";
import { AggregateCalendar_datesArgs } from "./args/AggregateCalendar_datesArgs";
import { CreateOneCalendar_datesArgs } from "./args/CreateOneCalendar_datesArgs";
import { DeleteManyCalendar_datesArgs } from "./args/DeleteManyCalendar_datesArgs";
import { DeleteOneCalendar_datesArgs } from "./args/DeleteOneCalendar_datesArgs";
import { FindFirstCalendar_datesArgs } from "./args/FindFirstCalendar_datesArgs";
import { FindManyCalendar_datesArgs } from "./args/FindManyCalendar_datesArgs";
import { FindUniqueCalendar_datesArgs } from "./args/FindUniqueCalendar_datesArgs";
import { GroupByCalendar_datesArgs } from "./args/GroupByCalendar_datesArgs";
import { UpdateManyCalendar_datesArgs } from "./args/UpdateManyCalendar_datesArgs";
import { UpdateOneCalendar_datesArgs } from "./args/UpdateOneCalendar_datesArgs";
import { UpsertOneCalendar_datesArgs } from "./args/UpsertOneCalendar_datesArgs";
import { Calendar_dates } from "../../../models/Calendar_dates";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCalendar_dates } from "../../outputs/AggregateCalendar_dates";
import { Calendar_datesGroupBy } from "../../outputs/Calendar_datesGroupBy";
export declare class Calendar_datesCrudResolver {
    aggregateCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: AggregateCalendar_datesArgs): Promise<AggregateCalendar_dates>;
    createOneCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: CreateOneCalendar_datesArgs): Promise<Calendar_dates>;
    deleteManyCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCalendar_datesArgs): Promise<AffectedRowsOutput>;
    deleteOneCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCalendar_datesArgs): Promise<Calendar_dates | null>;
    findFirstCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: FindFirstCalendar_datesArgs): Promise<Calendar_dates | null>;
    findManyCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: FindManyCalendar_datesArgs): Promise<Calendar_dates[]>;
    findUniqueCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCalendar_datesArgs): Promise<Calendar_dates | null>;
    groupByCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: GroupByCalendar_datesArgs): Promise<Calendar_datesGroupBy[]>;
    updateManyCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCalendar_datesArgs): Promise<AffectedRowsOutput>;
    updateOneCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCalendar_datesArgs): Promise<Calendar_dates | null>;
    upsertOneCalendar_dates(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCalendar_datesArgs): Promise<Calendar_dates>;
}
