import { TripsOrderByWithAggregationInput } from "../../../inputs/TripsOrderByWithAggregationInput";
import { TripsScalarWhereWithAggregatesInput } from "../../../inputs/TripsScalarWhereWithAggregatesInput";
import { TripsWhereInput } from "../../../inputs/TripsWhereInput";
export declare class GroupByTripsArgs {
    where?: TripsWhereInput | undefined;
    orderBy?: TripsOrderByWithAggregationInput[] | undefined;
    by: Array<"route_id" | "service_id" | "trip_id" | "trip_headsign" | "start_time" | "end_time">;
    having?: TripsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
