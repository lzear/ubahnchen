import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { Stop_timesUpdateManyWithoutTripsNestedInput } from "../inputs/Stop_timesUpdateManyWithoutTripsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TripsUpdateWithoutRoutesInput {
    service_id?: IntFieldUpdateOperationsInput | undefined;
    trip_headsign?: StringFieldUpdateOperationsInput | undefined;
    start_time?: IntFieldUpdateOperationsInput | undefined;
    end_time?: IntFieldUpdateOperationsInput | undefined;
    stop_times?: Stop_timesUpdateManyWithoutTripsNestedInput | undefined;
}
