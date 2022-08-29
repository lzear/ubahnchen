import { StopsAvgOrderByAggregateInput } from "../inputs/StopsAvgOrderByAggregateInput";
import { StopsCountOrderByAggregateInput } from "../inputs/StopsCountOrderByAggregateInput";
import { StopsMaxOrderByAggregateInput } from "../inputs/StopsMaxOrderByAggregateInput";
import { StopsMinOrderByAggregateInput } from "../inputs/StopsMinOrderByAggregateInput";
import { StopsSumOrderByAggregateInput } from "../inputs/StopsSumOrderByAggregateInput";
export declare class StopsOrderByWithAggregationInput {
    stop_idx?: "asc" | "desc" | undefined;
    stop_id?: "asc" | "desc" | undefined;
    stop_name?: "asc" | "desc" | undefined;
    _count?: StopsCountOrderByAggregateInput | undefined;
    _avg?: StopsAvgOrderByAggregateInput | undefined;
    _max?: StopsMaxOrderByAggregateInput | undefined;
    _min?: StopsMinOrderByAggregateInput | undefined;
    _sum?: StopsSumOrderByAggregateInput | undefined;
}
