import { TripsOrderByRelationAggregateInput } from "../inputs/TripsOrderByRelationAggregateInput";
export declare class RoutesOrderByWithRelationInput {
    route_id?: "asc" | "desc" | undefined;
    route_name?: "asc" | "desc" | undefined;
    trips?: TripsOrderByRelationAggregateInput | undefined;
}
