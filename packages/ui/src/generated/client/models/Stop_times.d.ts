import { Stops } from "../models/Stops";
import { Trips } from "../models/Trips";
export declare class Stop_times {
    idx: number;
    trip_id: number;
    arrival_time: number;
    departure_time: number;
    stop_idx: number;
    stops?: Stops;
    trips?: Trips;
}
