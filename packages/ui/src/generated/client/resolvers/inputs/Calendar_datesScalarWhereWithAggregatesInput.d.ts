import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class Calendar_datesScalarWhereWithAggregatesInput {
    AND?: Calendar_datesScalarWhereWithAggregatesInput[] | undefined;
    OR?: Calendar_datesScalarWhereWithAggregatesInput[] | undefined;
    NOT?: Calendar_datesScalarWhereWithAggregatesInput[] | undefined;
    idx?: IntWithAggregatesFilter | undefined;
    service_id?: IntWithAggregatesFilter | undefined;
    date?: StringWithAggregatesFilter | undefined;
    is_removing?: IntWithAggregatesFilter | undefined;
}
