import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CalendarWhereInput {
    AND?: CalendarWhereInput[] | undefined;
    OR?: CalendarWhereInput[] | undefined;
    NOT?: CalendarWhereInput[] | undefined;
    service_id?: IntFilter | undefined;
    monday?: IntFilter | undefined;
    tuesday?: IntFilter | undefined;
    wednesday?: IntFilter | undefined;
    thursday?: IntFilter | undefined;
    friday?: IntFilter | undefined;
    saturday?: IntFilter | undefined;
    sunday?: IntFilter | undefined;
    start_date?: StringFilter | undefined;
    end_date?: StringFilter | undefined;
}
