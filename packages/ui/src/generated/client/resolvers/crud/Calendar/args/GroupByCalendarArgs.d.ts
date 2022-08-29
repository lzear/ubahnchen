import { CalendarOrderByWithAggregationInput } from "../../../inputs/CalendarOrderByWithAggregationInput";
import { CalendarScalarWhereWithAggregatesInput } from "../../../inputs/CalendarScalarWhereWithAggregatesInput";
import { CalendarWhereInput } from "../../../inputs/CalendarWhereInput";
export declare class GroupByCalendarArgs {
    where?: CalendarWhereInput | undefined;
    orderBy?: CalendarOrderByWithAggregationInput[] | undefined;
    by: Array<"service_id" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | "start_date" | "end_date">;
    having?: CalendarScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
