import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class StopsScalarWhereWithAggregatesInput {
    AND?: StopsScalarWhereWithAggregatesInput[] | undefined;
    OR?: StopsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: StopsScalarWhereWithAggregatesInput[] | undefined;
    stop_idx?: IntWithAggregatesFilter | undefined;
    stop_id?: StringWithAggregatesFilter | undefined;
    stop_name?: StringWithAggregatesFilter | undefined;
}
