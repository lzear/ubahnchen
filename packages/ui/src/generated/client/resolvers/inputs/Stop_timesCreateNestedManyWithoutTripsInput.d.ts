import { Stop_timesCreateOrConnectWithoutTripsInput } from "../inputs/Stop_timesCreateOrConnectWithoutTripsInput";
import { Stop_timesCreateWithoutTripsInput } from "../inputs/Stop_timesCreateWithoutTripsInput";
import { Stop_timesWhereUniqueInput } from "../inputs/Stop_timesWhereUniqueInput";
export declare class Stop_timesCreateNestedManyWithoutTripsInput {
    create?: Stop_timesCreateWithoutTripsInput[] | undefined;
    connectOrCreate?: Stop_timesCreateOrConnectWithoutTripsInput[] | undefined;
    connect?: Stop_timesWhereUniqueInput[] | undefined;
}
