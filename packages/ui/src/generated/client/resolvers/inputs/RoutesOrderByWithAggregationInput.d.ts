import { RoutesCountOrderByAggregateInput } from "../inputs/RoutesCountOrderByAggregateInput";
import { RoutesMaxOrderByAggregateInput } from "../inputs/RoutesMaxOrderByAggregateInput";
import { RoutesMinOrderByAggregateInput } from "../inputs/RoutesMinOrderByAggregateInput";
export declare class RoutesOrderByWithAggregationInput {
    route_id?: "asc" | "desc" | undefined;
    route_name?: "asc" | "desc" | undefined;
    _count?: RoutesCountOrderByAggregateInput | undefined;
    _max?: RoutesMaxOrderByAggregateInput | undefined;
    _min?: RoutesMinOrderByAggregateInput | undefined;
}
