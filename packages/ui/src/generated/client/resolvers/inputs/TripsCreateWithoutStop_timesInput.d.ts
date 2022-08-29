import { RoutesCreateNestedOneWithoutTripsInput } from "../inputs/RoutesCreateNestedOneWithoutTripsInput";
export declare class TripsCreateWithoutStop_timesInput {
    service_id: number;
    trip_headsign: string;
    start_time: number;
    end_time: number;
    routes: RoutesCreateNestedOneWithoutTripsInput;
}
