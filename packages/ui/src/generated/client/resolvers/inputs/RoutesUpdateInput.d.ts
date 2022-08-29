import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TripsUpdateManyWithoutRoutesNestedInput } from "../inputs/TripsUpdateManyWithoutRoutesNestedInput";
export declare class RoutesUpdateInput {
    route_id?: StringFieldUpdateOperationsInput | undefined;
    route_name?: StringFieldUpdateOperationsInput | undefined;
    trips?: TripsUpdateManyWithoutRoutesNestedInput | undefined;
}
