import { IntFilter } from "../inputs/IntFilter";
import { StopsRelationFilter } from "../inputs/StopsRelationFilter";
import { TripsRelationFilter } from "../inputs/TripsRelationFilter";
export declare class Stop_timesWhereInput {
    AND?: Stop_timesWhereInput[] | undefined;
    OR?: Stop_timesWhereInput[] | undefined;
    NOT?: Stop_timesWhereInput[] | undefined;
    idx?: IntFilter | undefined;
    trip_id?: IntFilter | undefined;
    arrival_time?: IntFilter | undefined;
    departure_time?: IntFilter | undefined;
    stop_idx?: IntFilter | undefined;
    stops?: StopsRelationFilter | undefined;
    trips?: TripsRelationFilter | undefined;
}
