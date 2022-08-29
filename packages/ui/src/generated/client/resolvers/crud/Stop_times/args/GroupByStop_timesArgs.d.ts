import { Stop_timesOrderByWithAggregationInput } from "../../../inputs/Stop_timesOrderByWithAggregationInput";
import { Stop_timesScalarWhereWithAggregatesInput } from "../../../inputs/Stop_timesScalarWhereWithAggregatesInput";
import { Stop_timesWhereInput } from "../../../inputs/Stop_timesWhereInput";
export declare class GroupByStop_timesArgs {
    where?: Stop_timesWhereInput | undefined;
    orderBy?: Stop_timesOrderByWithAggregationInput[] | undefined;
    by: Array<"idx" | "trip_id" | "arrival_time" | "departure_time" | "stop_idx">;
    having?: Stop_timesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
