import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TripsScalarWhereWithAggregatesInput {
    AND?: TripsScalarWhereWithAggregatesInput[] | undefined;
    OR?: TripsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TripsScalarWhereWithAggregatesInput[] | undefined;
    route_id?: StringWithAggregatesFilter | undefined;
    service_id?: IntWithAggregatesFilter | undefined;
    trip_id?: IntWithAggregatesFilter | undefined;
    trip_headsign?: StringWithAggregatesFilter | undefined;
    start_time?: IntWithAggregatesFilter | undefined;
    end_time?: IntWithAggregatesFilter | undefined;
}
