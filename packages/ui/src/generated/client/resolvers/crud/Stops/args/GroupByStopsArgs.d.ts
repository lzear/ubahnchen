import { StopsOrderByWithAggregationInput } from "../../../inputs/StopsOrderByWithAggregationInput";
import { StopsScalarWhereWithAggregatesInput } from "../../../inputs/StopsScalarWhereWithAggregatesInput";
import { StopsWhereInput } from "../../../inputs/StopsWhereInput";
export declare class GroupByStopsArgs {
    where?: StopsWhereInput | undefined;
    orderBy?: StopsOrderByWithAggregationInput[] | undefined;
    by: Array<"stop_idx" | "stop_id" | "stop_name">;
    having?: StopsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
