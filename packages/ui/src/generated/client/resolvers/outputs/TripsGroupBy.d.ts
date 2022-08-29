import { TripsAvgAggregate } from "../outputs/TripsAvgAggregate";
import { TripsCountAggregate } from "../outputs/TripsCountAggregate";
import { TripsMaxAggregate } from "../outputs/TripsMaxAggregate";
import { TripsMinAggregate } from "../outputs/TripsMinAggregate";
import { TripsSumAggregate } from "../outputs/TripsSumAggregate";
export declare class TripsGroupBy {
    route_id: string;
    service_id: number;
    trip_id: number;
    trip_headsign: string;
    start_time: number;
    end_time: number;
    _count: TripsCountAggregate | null;
    _avg: TripsAvgAggregate | null;
    _sum: TripsSumAggregate | null;
    _min: TripsMinAggregate | null;
    _max: TripsMaxAggregate | null;
}
