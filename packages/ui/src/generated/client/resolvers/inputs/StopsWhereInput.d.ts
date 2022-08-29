import { IntFilter } from "../inputs/IntFilter";
import { Stop_timesListRelationFilter } from "../inputs/Stop_timesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class StopsWhereInput {
    AND?: StopsWhereInput[] | undefined;
    OR?: StopsWhereInput[] | undefined;
    NOT?: StopsWhereInput[] | undefined;
    stop_idx?: IntFilter | undefined;
    stop_id?: StringFilter | undefined;
    stop_name?: StringFilter | undefined;
    stop_times?: Stop_timesListRelationFilter | undefined;
}
