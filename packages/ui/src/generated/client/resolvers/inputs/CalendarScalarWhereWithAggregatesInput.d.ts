import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CalendarScalarWhereWithAggregatesInput {
    AND?: CalendarScalarWhereWithAggregatesInput[] | undefined;
    OR?: CalendarScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CalendarScalarWhereWithAggregatesInput[] | undefined;
    service_id?: IntWithAggregatesFilter | undefined;
    monday?: IntWithAggregatesFilter | undefined;
    tuesday?: IntWithAggregatesFilter | undefined;
    wednesday?: IntWithAggregatesFilter | undefined;
    thursday?: IntWithAggregatesFilter | undefined;
    friday?: IntWithAggregatesFilter | undefined;
    saturday?: IntWithAggregatesFilter | undefined;
    sunday?: IntWithAggregatesFilter | undefined;
    start_date?: StringWithAggregatesFilter | undefined;
    end_date?: StringWithAggregatesFilter | undefined;
}
