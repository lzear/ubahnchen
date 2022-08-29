import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { RoutesUpdateOneRequiredWithoutTripsNestedInput } from "../inputs/RoutesUpdateOneRequiredWithoutTripsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TripsUpdateWithoutStop_timesInput {
    service_id?: IntFieldUpdateOperationsInput | undefined;
    trip_headsign?: StringFieldUpdateOperationsInput | undefined;
    start_time?: IntFieldUpdateOperationsInput | undefined;
    end_time?: IntFieldUpdateOperationsInput | undefined;
    routes?: RoutesUpdateOneRequiredWithoutTripsNestedInput | undefined;
}
