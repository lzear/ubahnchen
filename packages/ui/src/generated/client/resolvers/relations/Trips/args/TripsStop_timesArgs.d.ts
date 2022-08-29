import { Stop_timesOrderByWithRelationInput } from "../../../inputs/Stop_timesOrderByWithRelationInput";
import { Stop_timesWhereInput } from "../../../inputs/Stop_timesWhereInput";
import { Stop_timesWhereUniqueInput } from "../../../inputs/Stop_timesWhereUniqueInput";
export declare class TripsStop_timesArgs {
    where?: Stop_timesWhereInput | undefined;
    orderBy?: Stop_timesOrderByWithRelationInput[] | undefined;
    cursor?: Stop_timesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"idx" | "trip_id" | "arrival_time" | "departure_time" | "stop_idx"> | undefined;
}
