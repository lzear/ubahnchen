import { RoutesCreateOrConnectWithoutTripsInput } from "../inputs/RoutesCreateOrConnectWithoutTripsInput";
import { RoutesCreateWithoutTripsInput } from "../inputs/RoutesCreateWithoutTripsInput";
import { RoutesWhereUniqueInput } from "../inputs/RoutesWhereUniqueInput";
export declare class RoutesCreateNestedOneWithoutTripsInput {
    create?: RoutesCreateWithoutTripsInput | undefined;
    connectOrCreate?: RoutesCreateOrConnectWithoutTripsInput | undefined;
    connect?: RoutesWhereUniqueInput | undefined;
}
