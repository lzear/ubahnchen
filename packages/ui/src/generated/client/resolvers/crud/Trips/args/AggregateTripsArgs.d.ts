import { TripsOrderByWithRelationInput } from "../../../inputs/TripsOrderByWithRelationInput";
import { TripsWhereInput } from "../../../inputs/TripsWhereInput";
import { TripsWhereUniqueInput } from "../../../inputs/TripsWhereUniqueInput";
export declare class AggregateTripsArgs {
    where?: TripsWhereInput | undefined;
    orderBy?: TripsOrderByWithRelationInput[] | undefined;
    cursor?: TripsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
