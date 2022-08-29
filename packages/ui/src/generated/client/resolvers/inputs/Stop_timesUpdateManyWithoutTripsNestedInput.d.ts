import { Stop_timesCreateOrConnectWithoutTripsInput } from "../inputs/Stop_timesCreateOrConnectWithoutTripsInput";
import { Stop_timesCreateWithoutTripsInput } from "../inputs/Stop_timesCreateWithoutTripsInput";
import { Stop_timesScalarWhereInput } from "../inputs/Stop_timesScalarWhereInput";
import { Stop_timesUpdateManyWithWhereWithoutTripsInput } from "../inputs/Stop_timesUpdateManyWithWhereWithoutTripsInput";
import { Stop_timesUpdateWithWhereUniqueWithoutTripsInput } from "../inputs/Stop_timesUpdateWithWhereUniqueWithoutTripsInput";
import { Stop_timesUpsertWithWhereUniqueWithoutTripsInput } from "../inputs/Stop_timesUpsertWithWhereUniqueWithoutTripsInput";
import { Stop_timesWhereUniqueInput } from "../inputs/Stop_timesWhereUniqueInput";
export declare class Stop_timesUpdateManyWithoutTripsNestedInput {
    create?: Stop_timesCreateWithoutTripsInput[] | undefined;
    connectOrCreate?: Stop_timesCreateOrConnectWithoutTripsInput[] | undefined;
    upsert?: Stop_timesUpsertWithWhereUniqueWithoutTripsInput[] | undefined;
    set?: Stop_timesWhereUniqueInput[] | undefined;
    disconnect?: Stop_timesWhereUniqueInput[] | undefined;
    delete?: Stop_timesWhereUniqueInput[] | undefined;
    connect?: Stop_timesWhereUniqueInput[] | undefined;
    update?: Stop_timesUpdateWithWhereUniqueWithoutTripsInput[] | undefined;
    updateMany?: Stop_timesUpdateManyWithWhereWithoutTripsInput[] | undefined;
    deleteMany?: Stop_timesScalarWhereInput[] | undefined;
}
