import { TripsAvgOrderByAggregateInput } from "../inputs/TripsAvgOrderByAggregateInput";
import { TripsCountOrderByAggregateInput } from "../inputs/TripsCountOrderByAggregateInput";
import { TripsMaxOrderByAggregateInput } from "../inputs/TripsMaxOrderByAggregateInput";
import { TripsMinOrderByAggregateInput } from "../inputs/TripsMinOrderByAggregateInput";
import { TripsSumOrderByAggregateInput } from "../inputs/TripsSumOrderByAggregateInput";
export declare class TripsOrderByWithAggregationInput {
    route_id?: "asc" | "desc" | undefined;
    service_id?: "asc" | "desc" | undefined;
    trip_id?: "asc" | "desc" | undefined;
    trip_headsign?: "asc" | "desc" | undefined;
    start_time?: "asc" | "desc" | undefined;
    end_time?: "asc" | "desc" | undefined;
    _count?: TripsCountOrderByAggregateInput | undefined;
    _avg?: TripsAvgOrderByAggregateInput | undefined;
    _max?: TripsMaxOrderByAggregateInput | undefined;
    _min?: TripsMinOrderByAggregateInput | undefined;
    _sum?: TripsSumOrderByAggregateInput | undefined;
}
