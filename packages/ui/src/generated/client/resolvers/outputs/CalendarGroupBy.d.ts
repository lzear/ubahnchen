import { CalendarAvgAggregate } from "../outputs/CalendarAvgAggregate";
import { CalendarCountAggregate } from "../outputs/CalendarCountAggregate";
import { CalendarMaxAggregate } from "../outputs/CalendarMaxAggregate";
import { CalendarMinAggregate } from "../outputs/CalendarMinAggregate";
import { CalendarSumAggregate } from "../outputs/CalendarSumAggregate";
export declare class CalendarGroupBy {
    service_id: number;
    monday: number;
    tuesday: number;
    wednesday: number;
    thursday: number;
    friday: number;
    saturday: number;
    sunday: number;
    start_date: string;
    end_date: string;
    _count: CalendarCountAggregate | null;
    _avg: CalendarAvgAggregate | null;
    _sum: CalendarSumAggregate | null;
    _min: CalendarMinAggregate | null;
    _max: CalendarMaxAggregate | null;
}
