import { Stop_timesAvgAggregate } from "../outputs/Stop_timesAvgAggregate";
import { Stop_timesCountAggregate } from "../outputs/Stop_timesCountAggregate";
import { Stop_timesMaxAggregate } from "../outputs/Stop_timesMaxAggregate";
import { Stop_timesMinAggregate } from "../outputs/Stop_timesMinAggregate";
import { Stop_timesSumAggregate } from "../outputs/Stop_timesSumAggregate";
export declare class AggregateStop_times {
    _count: Stop_timesCountAggregate | null;
    _avg: Stop_timesAvgAggregate | null;
    _sum: Stop_timesSumAggregate | null;
    _min: Stop_timesMinAggregate | null;
    _max: Stop_timesMaxAggregate | null;
}
