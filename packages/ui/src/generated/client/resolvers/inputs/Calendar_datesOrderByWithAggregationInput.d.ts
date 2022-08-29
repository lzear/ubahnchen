import { Calendar_datesAvgOrderByAggregateInput } from "../inputs/Calendar_datesAvgOrderByAggregateInput";
import { Calendar_datesCountOrderByAggregateInput } from "../inputs/Calendar_datesCountOrderByAggregateInput";
import { Calendar_datesMaxOrderByAggregateInput } from "../inputs/Calendar_datesMaxOrderByAggregateInput";
import { Calendar_datesMinOrderByAggregateInput } from "../inputs/Calendar_datesMinOrderByAggregateInput";
import { Calendar_datesSumOrderByAggregateInput } from "../inputs/Calendar_datesSumOrderByAggregateInput";
export declare class Calendar_datesOrderByWithAggregationInput {
    idx?: "asc" | "desc" | undefined;
    service_id?: "asc" | "desc" | undefined;
    date?: "asc" | "desc" | undefined;
    is_removing?: "asc" | "desc" | undefined;
    _count?: Calendar_datesCountOrderByAggregateInput | undefined;
    _avg?: Calendar_datesAvgOrderByAggregateInput | undefined;
    _max?: Calendar_datesMaxOrderByAggregateInput | undefined;
    _min?: Calendar_datesMinOrderByAggregateInput | undefined;
    _sum?: Calendar_datesSumOrderByAggregateInput | undefined;
}
