import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class Calendar_datesWhereInput {
    AND?: Calendar_datesWhereInput[] | undefined;
    OR?: Calendar_datesWhereInput[] | undefined;
    NOT?: Calendar_datesWhereInput[] | undefined;
    idx?: IntFilter | undefined;
    service_id?: IntFilter | undefined;
    date?: StringFilter | undefined;
    is_removing?: IntFilter | undefined;
}
