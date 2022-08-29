import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { TripsUpdateOneRequiredWithoutStop_timesNestedInput } from "../inputs/TripsUpdateOneRequiredWithoutStop_timesNestedInput";
export declare class Stop_timesUpdateWithoutStopsInput {
    arrival_time?: IntFieldUpdateOperationsInput | undefined;
    departure_time?: IntFieldUpdateOperationsInput | undefined;
    trips?: TripsUpdateOneRequiredWithoutStop_timesNestedInput | undefined;
}
