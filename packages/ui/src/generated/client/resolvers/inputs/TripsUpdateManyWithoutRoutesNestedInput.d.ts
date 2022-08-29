import { TripsCreateOrConnectWithoutRoutesInput } from "../inputs/TripsCreateOrConnectWithoutRoutesInput";
import { TripsCreateWithoutRoutesInput } from "../inputs/TripsCreateWithoutRoutesInput";
import { TripsScalarWhereInput } from "../inputs/TripsScalarWhereInput";
import { TripsUpdateManyWithWhereWithoutRoutesInput } from "../inputs/TripsUpdateManyWithWhereWithoutRoutesInput";
import { TripsUpdateWithWhereUniqueWithoutRoutesInput } from "../inputs/TripsUpdateWithWhereUniqueWithoutRoutesInput";
import { TripsUpsertWithWhereUniqueWithoutRoutesInput } from "../inputs/TripsUpsertWithWhereUniqueWithoutRoutesInput";
import { TripsWhereUniqueInput } from "../inputs/TripsWhereUniqueInput";
export declare class TripsUpdateManyWithoutRoutesNestedInput {
    create?: TripsCreateWithoutRoutesInput[] | undefined;
    connectOrCreate?: TripsCreateOrConnectWithoutRoutesInput[] | undefined;
    upsert?: TripsUpsertWithWhereUniqueWithoutRoutesInput[] | undefined;
    set?: TripsWhereUniqueInput[] | undefined;
    disconnect?: TripsWhereUniqueInput[] | undefined;
    delete?: TripsWhereUniqueInput[] | undefined;
    connect?: TripsWhereUniqueInput[] | undefined;
    update?: TripsUpdateWithWhereUniqueWithoutRoutesInput[] | undefined;
    updateMany?: TripsUpdateManyWithWhereWithoutRoutesInput[] | undefined;
    deleteMany?: TripsScalarWhereInput[] | undefined;
}
