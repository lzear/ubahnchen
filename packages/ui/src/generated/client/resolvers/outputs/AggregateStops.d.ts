import { StopsAvgAggregate } from "../outputs/StopsAvgAggregate";
import { StopsCountAggregate } from "../outputs/StopsCountAggregate";
import { StopsMaxAggregate } from "../outputs/StopsMaxAggregate";
import { StopsMinAggregate } from "../outputs/StopsMinAggregate";
import { StopsSumAggregate } from "../outputs/StopsSumAggregate";
export declare class AggregateStops {
    _count: StopsCountAggregate | null;
    _avg: StopsAvgAggregate | null;
    _sum: StopsSumAggregate | null;
    _min: StopsMinAggregate | null;
    _max: StopsMaxAggregate | null;
}
