import { Stop_timesCreateOrConnectWithoutStopsInput } from "../inputs/Stop_timesCreateOrConnectWithoutStopsInput";
import { Stop_timesCreateWithoutStopsInput } from "../inputs/Stop_timesCreateWithoutStopsInput";
import { Stop_timesScalarWhereInput } from "../inputs/Stop_timesScalarWhereInput";
import { Stop_timesUpdateManyWithWhereWithoutStopsInput } from "../inputs/Stop_timesUpdateManyWithWhereWithoutStopsInput";
import { Stop_timesUpdateWithWhereUniqueWithoutStopsInput } from "../inputs/Stop_timesUpdateWithWhereUniqueWithoutStopsInput";
import { Stop_timesUpsertWithWhereUniqueWithoutStopsInput } from "../inputs/Stop_timesUpsertWithWhereUniqueWithoutStopsInput";
import { Stop_timesWhereUniqueInput } from "../inputs/Stop_timesWhereUniqueInput";
export declare class Stop_timesUpdateManyWithoutStopsNestedInput {
    create?: Stop_timesCreateWithoutStopsInput[] | undefined;
    connectOrCreate?: Stop_timesCreateOrConnectWithoutStopsInput[] | undefined;
    upsert?: Stop_timesUpsertWithWhereUniqueWithoutStopsInput[] | undefined;
    set?: Stop_timesWhereUniqueInput[] | undefined;
    disconnect?: Stop_timesWhereUniqueInput[] | undefined;
    delete?: Stop_timesWhereUniqueInput[] | undefined;
    connect?: Stop_timesWhereUniqueInput[] | undefined;
    update?: Stop_timesUpdateWithWhereUniqueWithoutStopsInput[] | undefined;
    updateMany?: Stop_timesUpdateManyWithWhereWithoutStopsInput[] | undefined;
    deleteMany?: Stop_timesScalarWhereInput[] | undefined;
}
