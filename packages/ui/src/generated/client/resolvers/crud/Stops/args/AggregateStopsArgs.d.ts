import { StopsOrderByWithRelationInput } from "../../../inputs/StopsOrderByWithRelationInput";
import { StopsWhereInput } from "../../../inputs/StopsWhereInput";
import { StopsWhereUniqueInput } from "../../../inputs/StopsWhereUniqueInput";
export declare class AggregateStopsArgs {
    where?: StopsWhereInput | undefined;
    orderBy?: StopsOrderByWithRelationInput[] | undefined;
    cursor?: StopsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
