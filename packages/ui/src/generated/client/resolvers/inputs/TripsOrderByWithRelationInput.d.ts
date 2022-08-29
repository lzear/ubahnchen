import { RoutesOrderByWithRelationInput } from "../inputs/RoutesOrderByWithRelationInput";
import { Stop_timesOrderByRelationAggregateInput } from "../inputs/Stop_timesOrderByRelationAggregateInput";
export declare class TripsOrderByWithRelationInput {
    route_id?: "asc" | "desc" | undefined;
    service_id?: "asc" | "desc" | undefined;
    trip_id?: "asc" | "desc" | undefined;
    trip_headsign?: "asc" | "desc" | undefined;
    start_time?: "asc" | "desc" | undefined;
    end_time?: "asc" | "desc" | undefined;
    routes?: RoutesOrderByWithRelationInput | undefined;
    stop_times?: Stop_timesOrderByRelationAggregateInput | undefined;
}
