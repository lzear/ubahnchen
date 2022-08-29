import { Calendar_datesAvgAggregate } from "../outputs/Calendar_datesAvgAggregate";
import { Calendar_datesCountAggregate } from "../outputs/Calendar_datesCountAggregate";
import { Calendar_datesMaxAggregate } from "../outputs/Calendar_datesMaxAggregate";
import { Calendar_datesMinAggregate } from "../outputs/Calendar_datesMinAggregate";
import { Calendar_datesSumAggregate } from "../outputs/Calendar_datesSumAggregate";
export declare class AggregateCalendar_dates {
    _count: Calendar_datesCountAggregate | null;
    _avg: Calendar_datesAvgAggregate | null;
    _sum: Calendar_datesSumAggregate | null;
    _min: Calendar_datesMinAggregate | null;
    _max: Calendar_datesMaxAggregate | null;
}
