import { Calendar_datesOrderByWithRelationInput } from "../../../inputs/Calendar_datesOrderByWithRelationInput";
import { Calendar_datesWhereInput } from "../../../inputs/Calendar_datesWhereInput";
import { Calendar_datesWhereUniqueInput } from "../../../inputs/Calendar_datesWhereUniqueInput";
export declare class FindFirstCalendar_datesArgs {
    where?: Calendar_datesWhereInput | undefined;
    orderBy?: Calendar_datesOrderByWithRelationInput[] | undefined;
    cursor?: Calendar_datesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"idx" | "service_id" | "date" | "is_removing"> | undefined;
}
