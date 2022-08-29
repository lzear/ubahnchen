import { CalendarAvgOrderByAggregateInput } from "../inputs/CalendarAvgOrderByAggregateInput";
import { CalendarCountOrderByAggregateInput } from "../inputs/CalendarCountOrderByAggregateInput";
import { CalendarMaxOrderByAggregateInput } from "../inputs/CalendarMaxOrderByAggregateInput";
import { CalendarMinOrderByAggregateInput } from "../inputs/CalendarMinOrderByAggregateInput";
import { CalendarSumOrderByAggregateInput } from "../inputs/CalendarSumOrderByAggregateInput";
export declare class CalendarOrderByWithAggregationInput {
    service_id?: "asc" | "desc" | undefined;
    monday?: "asc" | "desc" | undefined;
    tuesday?: "asc" | "desc" | undefined;
    wednesday?: "asc" | "desc" | undefined;
    thursday?: "asc" | "desc" | undefined;
    friday?: "asc" | "desc" | undefined;
    saturday?: "asc" | "desc" | undefined;
    sunday?: "asc" | "desc" | undefined;
    start_date?: "asc" | "desc" | undefined;
    end_date?: "asc" | "desc" | undefined;
    _count?: CalendarCountOrderByAggregateInput | undefined;
    _avg?: CalendarAvgOrderByAggregateInput | undefined;
    _max?: CalendarMaxOrderByAggregateInput | undefined;
    _min?: CalendarMinOrderByAggregateInput | undefined;
    _sum?: CalendarSumOrderByAggregateInput | undefined;
}
