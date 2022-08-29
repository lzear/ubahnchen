import { TripsAvgAggregate } from "../outputs/TripsAvgAggregate";
import { TripsCountAggregate } from "../outputs/TripsCountAggregate";
import { TripsMaxAggregate } from "../outputs/TripsMaxAggregate";
import { TripsMinAggregate } from "../outputs/TripsMinAggregate";
import { TripsSumAggregate } from "../outputs/TripsSumAggregate";
export declare class AggregateTrips {
    _count: TripsCountAggregate | null;
    _avg: TripsAvgAggregate | null;
    _sum: TripsSumAggregate | null;
    _min: TripsMinAggregate | null;
    _max: TripsMaxAggregate | null;
}
