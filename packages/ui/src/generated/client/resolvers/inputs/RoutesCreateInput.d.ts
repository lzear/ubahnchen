import { TripsCreateNestedManyWithoutRoutesInput } from "../inputs/TripsCreateNestedManyWithoutRoutesInput";
export declare class RoutesCreateInput {
    route_id: string;
    route_name: string;
    trips?: TripsCreateNestedManyWithoutRoutesInput | undefined;
}
