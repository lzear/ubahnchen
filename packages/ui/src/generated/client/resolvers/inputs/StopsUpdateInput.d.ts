import { Stop_timesUpdateManyWithoutStopsNestedInput } from "../inputs/Stop_timesUpdateManyWithoutStopsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class StopsUpdateInput {
    stop_id?: StringFieldUpdateOperationsInput | undefined;
    stop_name?: StringFieldUpdateOperationsInput | undefined;
    stop_times?: Stop_timesUpdateManyWithoutStopsNestedInput | undefined;
}
