import { TripsCreateOrConnectWithoutRoutesInput } from "../inputs/TripsCreateOrConnectWithoutRoutesInput";
import { TripsCreateWithoutRoutesInput } from "../inputs/TripsCreateWithoutRoutesInput";
import { TripsWhereUniqueInput } from "../inputs/TripsWhereUniqueInput";
export declare class TripsCreateNestedManyWithoutRoutesInput {
    create?: TripsCreateWithoutRoutesInput[] | undefined;
    connectOrCreate?: TripsCreateOrConnectWithoutRoutesInput[] | undefined;
    connect?: TripsWhereUniqueInput[] | undefined;
}
