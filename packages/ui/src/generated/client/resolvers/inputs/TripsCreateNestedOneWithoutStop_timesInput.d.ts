import { TripsCreateOrConnectWithoutStop_timesInput } from "../inputs/TripsCreateOrConnectWithoutStop_timesInput";
import { TripsCreateWithoutStop_timesInput } from "../inputs/TripsCreateWithoutStop_timesInput";
import { TripsWhereUniqueInput } from "../inputs/TripsWhereUniqueInput";
export declare class TripsCreateNestedOneWithoutStop_timesInput {
    create?: TripsCreateWithoutStop_timesInput | undefined;
    connectOrCreate?: TripsCreateOrConnectWithoutStop_timesInput | undefined;
    connect?: TripsWhereUniqueInput | undefined;
}
