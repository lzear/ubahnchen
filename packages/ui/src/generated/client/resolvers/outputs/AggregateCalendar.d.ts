import { CalendarAvgAggregate } from "../outputs/CalendarAvgAggregate";
import { CalendarCountAggregate } from "../outputs/CalendarCountAggregate";
import { CalendarMaxAggregate } from "../outputs/CalendarMaxAggregate";
import { CalendarMinAggregate } from "../outputs/CalendarMinAggregate";
import { CalendarSumAggregate } from "../outputs/CalendarSumAggregate";
export declare class AggregateCalendar {
    _count: CalendarCountAggregate | null;
    _avg: CalendarAvgAggregate | null;
    _sum: CalendarSumAggregate | null;
    _min: CalendarMinAggregate | null;
    _max: CalendarMaxAggregate | null;
}
