import { Stop_timesOrderByRelationAggregateInput } from "../inputs/Stop_timesOrderByRelationAggregateInput";
export declare class StopsOrderByWithRelationInput {
    stop_idx?: "asc" | "desc" | undefined;
    stop_id?: "asc" | "desc" | undefined;
    stop_name?: "asc" | "desc" | undefined;
    stop_times?: Stop_timesOrderByRelationAggregateInput | undefined;
}
