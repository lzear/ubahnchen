import { CalendarOrderByWithRelationInput } from "../../../inputs/CalendarOrderByWithRelationInput";
import { CalendarWhereInput } from "../../../inputs/CalendarWhereInput";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";
export declare class FindFirstCalendarArgs {
    where?: CalendarWhereInput | undefined;
    orderBy?: CalendarOrderByWithRelationInput[] | undefined;
    cursor?: CalendarWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"service_id" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday" | "start_date" | "end_date"> | undefined;
}
