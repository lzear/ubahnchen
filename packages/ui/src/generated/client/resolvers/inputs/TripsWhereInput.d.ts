import { IntFilter } from "../inputs/IntFilter";
import { RoutesRelationFilter } from "../inputs/RoutesRelationFilter";
import { Stop_timesListRelationFilter } from "../inputs/Stop_timesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class TripsWhereInput {
    AND?: TripsWhereInput[] | undefined;
    OR?: TripsWhereInput[] | undefined;
    NOT?: TripsWhereInput[] | undefined;
    route_id?: StringFilter | undefined;
    service_id?: IntFilter | undefined;
    trip_id?: IntFilter | undefined;
    trip_headsign?: StringFilter | undefined;
    start_time?: IntFilter | undefined;
    end_time?: IntFilter | undefined;
    routes?: RoutesRelationFilter | undefined;
    stop_times?: Stop_timesListRelationFilter | undefined;
}
