import { StringFilter } from "../inputs/StringFilter";
import { TripsListRelationFilter } from "../inputs/TripsListRelationFilter";
export declare class RoutesWhereInput {
    AND?: RoutesWhereInput[] | undefined;
    OR?: RoutesWhereInput[] | undefined;
    NOT?: RoutesWhereInput[] | undefined;
    route_id?: StringFilter | undefined;
    route_name?: StringFilter | undefined;
    trips?: TripsListRelationFilter | undefined;
}
