import { StopsCreateNestedOneWithoutStop_timesInput } from "../inputs/StopsCreateNestedOneWithoutStop_timesInput";
import { TripsCreateNestedOneWithoutStop_timesInput } from "../inputs/TripsCreateNestedOneWithoutStop_timesInput";
export declare class Stop_timesCreateInput {
    arrival_time: number;
    departure_time: number;
    stops: StopsCreateNestedOneWithoutStop_timesInput;
    trips: TripsCreateNestedOneWithoutStop_timesInput;
}
