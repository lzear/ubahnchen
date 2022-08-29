import { CalendarOrderByWithRelationInput } from "../../../inputs/CalendarOrderByWithRelationInput";
import { CalendarWhereInput } from "../../../inputs/CalendarWhereInput";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";
export declare class AggregateCalendarArgs {
    where?: CalendarWhereInput | undefined;
    orderBy?: CalendarOrderByWithRelationInput[] | undefined;
    cursor?: CalendarWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
