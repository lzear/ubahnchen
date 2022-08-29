import { TripsCreateOrConnectWithoutStop_timesInput } from "../inputs/TripsCreateOrConnectWithoutStop_timesInput";
import { TripsCreateWithoutStop_timesInput } from "../inputs/TripsCreateWithoutStop_timesInput";
import { TripsUpdateWithoutStop_timesInput } from "../inputs/TripsUpdateWithoutStop_timesInput";
import { TripsUpsertWithoutStop_timesInput } from "../inputs/TripsUpsertWithoutStop_timesInput";
import { TripsWhereUniqueInput } from "../inputs/TripsWhereUniqueInput";
export declare class TripsUpdateOneRequiredWithoutStop_timesNestedInput {
    create?: TripsCreateWithoutStop_timesInput | undefined;
    connectOrCreate?: TripsCreateOrConnectWithoutStop_timesInput | undefined;
    upsert?: TripsUpsertWithoutStop_timesInput | undefined;
    connect?: TripsWhereUniqueInput | undefined;
    update?: TripsUpdateWithoutStop_timesInput | undefined;
}
