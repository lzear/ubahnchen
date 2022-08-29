import { Stop_timesCreateNestedManyWithoutTripsInput } from "../inputs/Stop_timesCreateNestedManyWithoutTripsInput";
export declare class TripsCreateWithoutRoutesInput {
    service_id: number;
    trip_headsign: string;
    start_time: number;
    end_time: number;
    stop_times?: Stop_timesCreateNestedManyWithoutTripsInput | undefined;
}
