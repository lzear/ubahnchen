import { RoutesCreateOrConnectWithoutTripsInput } from "../inputs/RoutesCreateOrConnectWithoutTripsInput";
import { RoutesCreateWithoutTripsInput } from "../inputs/RoutesCreateWithoutTripsInput";
import { RoutesUpdateWithoutTripsInput } from "../inputs/RoutesUpdateWithoutTripsInput";
import { RoutesUpsertWithoutTripsInput } from "../inputs/RoutesUpsertWithoutTripsInput";
import { RoutesWhereUniqueInput } from "../inputs/RoutesWhereUniqueInput";
export declare class RoutesUpdateOneRequiredWithoutTripsNestedInput {
    create?: RoutesCreateWithoutTripsInput | undefined;
    connectOrCreate?: RoutesCreateOrConnectWithoutTripsInput | undefined;
    upsert?: RoutesUpsertWithoutTripsInput | undefined;
    connect?: RoutesWhereUniqueInput | undefined;
    update?: RoutesUpdateWithoutTripsInput | undefined;
}
