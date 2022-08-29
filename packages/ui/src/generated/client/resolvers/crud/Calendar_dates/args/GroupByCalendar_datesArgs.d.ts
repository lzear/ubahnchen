import { Calendar_datesOrderByWithAggregationInput } from "../../../inputs/Calendar_datesOrderByWithAggregationInput";
import { Calendar_datesScalarWhereWithAggregatesInput } from "../../../inputs/Calendar_datesScalarWhereWithAggregatesInput";
import { Calendar_datesWhereInput } from "../../../inputs/Calendar_datesWhereInput";
export declare class GroupByCalendar_datesArgs {
    where?: Calendar_datesWhereInput | undefined;
    orderBy?: Calendar_datesOrderByWithAggregationInput[] | undefined;
    by: Array<"idx" | "service_id" | "date" | "is_removing">;
    having?: Calendar_datesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
