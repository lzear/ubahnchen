import { Stop_timesAvgOrderByAggregateInput } from "../inputs/Stop_timesAvgOrderByAggregateInput";
import { Stop_timesCountOrderByAggregateInput } from "../inputs/Stop_timesCountOrderByAggregateInput";
import { Stop_timesMaxOrderByAggregateInput } from "../inputs/Stop_timesMaxOrderByAggregateInput";
import { Stop_timesMinOrderByAggregateInput } from "../inputs/Stop_timesMinOrderByAggregateInput";
import { Stop_timesSumOrderByAggregateInput } from "../inputs/Stop_timesSumOrderByAggregateInput";
export declare class Stop_timesOrderByWithAggregationInput {
    idx?: "asc" | "desc" | undefined;
    trip_id?: "asc" | "desc" | undefined;
    arrival_time?: "asc" | "desc" | undefined;
    departure_time?: "asc" | "desc" | undefined;
    stop_idx?: "asc" | "desc" | undefined;
    _count?: Stop_timesCountOrderByAggregateInput | undefined;
    _avg?: Stop_timesAvgOrderByAggregateInput | undefined;
    _max?: Stop_timesMaxOrderByAggregateInput | undefined;
    _min?: Stop_timesMinOrderByAggregateInput | undefined;
    _sum?: Stop_timesSumOrderByAggregateInput | undefined;
}
