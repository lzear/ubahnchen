import { RoutesOrderByWithAggregationInput } from "../../../inputs/RoutesOrderByWithAggregationInput";
import { RoutesScalarWhereWithAggregatesInput } from "../../../inputs/RoutesScalarWhereWithAggregatesInput";
import { RoutesWhereInput } from "../../../inputs/RoutesWhereInput";
export declare class GroupByRoutesArgs {
    where?: RoutesWhereInput | undefined;
    orderBy?: RoutesOrderByWithAggregationInput[] | undefined;
    by: Array<"route_id" | "route_name">;
    having?: RoutesScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
