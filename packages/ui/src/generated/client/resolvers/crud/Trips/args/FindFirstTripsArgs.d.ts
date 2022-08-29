import { TripsOrderByWithRelationInput } from "../../../inputs/TripsOrderByWithRelationInput";
import { TripsWhereInput } from "../../../inputs/TripsWhereInput";
import { TripsWhereUniqueInput } from "../../../inputs/TripsWhereUniqueInput";
export declare class FindFirstTripsArgs {
    where?: TripsWhereInput | undefined;
    orderBy?: TripsOrderByWithRelationInput[] | undefined;
    cursor?: TripsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"route_id" | "service_id" | "trip_id" | "trip_headsign" | "start_time" | "end_time"> | undefined;
}
