import { StopsOrderByWithRelationInput } from "../inputs/StopsOrderByWithRelationInput";
import { TripsOrderByWithRelationInput } from "../inputs/TripsOrderByWithRelationInput";
export declare class Stop_timesOrderByWithRelationInput {
    idx?: "asc" | "desc" | undefined;
    trip_id?: "asc" | "desc" | undefined;
    arrival_time?: "asc" | "desc" | undefined;
    departure_time?: "asc" | "desc" | undefined;
    stop_idx?: "asc" | "desc" | undefined;
    stops?: StopsOrderByWithRelationInput | undefined;
    trips?: TripsOrderByWithRelationInput | undefined;
}
