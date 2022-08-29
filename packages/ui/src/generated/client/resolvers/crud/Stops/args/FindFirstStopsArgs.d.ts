import { StopsOrderByWithRelationInput } from "../../../inputs/StopsOrderByWithRelationInput";
import { StopsWhereInput } from "../../../inputs/StopsWhereInput";
import { StopsWhereUniqueInput } from "../../../inputs/StopsWhereUniqueInput";
export declare class FindFirstStopsArgs {
    where?: StopsWhereInput | undefined;
    orderBy?: StopsOrderByWithRelationInput[] | undefined;
    cursor?: StopsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"stop_idx" | "stop_id" | "stop_name"> | undefined;
}
