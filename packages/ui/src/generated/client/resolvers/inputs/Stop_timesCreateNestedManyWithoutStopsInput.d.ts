import { Stop_timesCreateOrConnectWithoutStopsInput } from "../inputs/Stop_timesCreateOrConnectWithoutStopsInput";
import { Stop_timesCreateWithoutStopsInput } from "../inputs/Stop_timesCreateWithoutStopsInput";
import { Stop_timesWhereUniqueInput } from "../inputs/Stop_timesWhereUniqueInput";
export declare class Stop_timesCreateNestedManyWithoutStopsInput {
    create?: Stop_timesCreateWithoutStopsInput[] | undefined;
    connectOrCreate?: Stop_timesCreateOrConnectWithoutStopsInput[] | undefined;
    connect?: Stop_timesWhereUniqueInput[] | undefined;
}
