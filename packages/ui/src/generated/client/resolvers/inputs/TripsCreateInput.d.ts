import { RoutesCreateNestedOneWithoutTripsInput } from "../inputs/RoutesCreateNestedOneWithoutTripsInput";
import { Stop_timesCreateNestedManyWithoutTripsInput } from "../inputs/Stop_timesCreateNestedManyWithoutTripsInput";
export declare class TripsCreateInput {
    service_id: number;
    trip_headsign: string;
    start_time: number;
    end_time: number;
    routes: RoutesCreateNestedOneWithoutTripsInput;
    stop_times?: Stop_timesCreateNestedManyWithoutTripsInput | undefined;
}
