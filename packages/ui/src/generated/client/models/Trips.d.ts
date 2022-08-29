import { Routes } from "../models/Routes";
import { Stop_times } from "../models/Stop_times";
import { TripsCount } from "../resolvers/outputs/TripsCount";
export declare class Trips {
    route_id: string;
    service_id: number;
    trip_id: number;
    trip_headsign: string;
    start_time: number;
    end_time: number;
    routes?: Routes;
    stop_times?: Stop_times[];
    _count?: TripsCount | null;
}
