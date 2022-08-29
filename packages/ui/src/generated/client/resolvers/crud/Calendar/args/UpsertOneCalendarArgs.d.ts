import { CalendarCreateInput } from "../../../inputs/CalendarCreateInput";
import { CalendarUpdateInput } from "../../../inputs/CalendarUpdateInput";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";
export declare class UpsertOneCalendarArgs {
    where: CalendarWhereUniqueInput;
    create: CalendarCreateInput;
    update: CalendarUpdateInput;
}
