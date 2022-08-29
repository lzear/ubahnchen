import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StopsUpdateOneRequiredWithoutStop_timesNestedInput } from "../inputs/StopsUpdateOneRequiredWithoutStop_timesNestedInput";
export declare class Stop_timesUpdateWithoutTripsInput {
    arrival_time?: IntFieldUpdateOperationsInput | undefined;
    departure_time?: IntFieldUpdateOperationsInput | undefined;
    stops?: StopsUpdateOneRequiredWithoutStop_timesNestedInput | undefined;
}
