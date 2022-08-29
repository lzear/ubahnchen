import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TripsUpdateManyMutationInput {
    service_id?: IntFieldUpdateOperationsInput | undefined;
    trip_headsign?: StringFieldUpdateOperationsInput | undefined;
    start_time?: IntFieldUpdateOperationsInput | undefined;
    end_time?: IntFieldUpdateOperationsInput | undefined;
}
