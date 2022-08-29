import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class TripsScalarWhereInput {
    AND?: TripsScalarWhereInput[] | undefined;
    OR?: TripsScalarWhereInput[] | undefined;
    NOT?: TripsScalarWhereInput[] | undefined;
    route_id?: StringFilter | undefined;
    service_id?: IntFilter | undefined;
    trip_id?: IntFilter | undefined;
    trip_headsign?: StringFilter | undefined;
    start_time?: IntFilter | undefined;
    end_time?: IntFilter | undefined;
}
