import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StopsUpdateOneRequiredWithoutStop_timesNestedInput } from "../inputs/StopsUpdateOneRequiredWithoutStop_timesNestedInput";
import { TripsUpdateOneRequiredWithoutStop_timesNestedInput } from "../inputs/TripsUpdateOneRequiredWithoutStop_timesNestedInput";
export declare class Stop_timesUpdateInput {
    arrival_time?: IntFieldUpdateOperationsInput | undefined;
    departure_time?: IntFieldUpdateOperationsInput | undefined;
    stops?: StopsUpdateOneRequiredWithoutStop_timesNestedInput | undefined;
    trips?: TripsUpdateOneRequiredWithoutStop_timesNestedInput | undefined;
}
