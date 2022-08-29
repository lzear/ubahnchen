import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CalendarUpdateInput {
    monday?: IntFieldUpdateOperationsInput | undefined;
    tuesday?: IntFieldUpdateOperationsInput | undefined;
    wednesday?: IntFieldUpdateOperationsInput | undefined;
    thursday?: IntFieldUpdateOperationsInput | undefined;
    friday?: IntFieldUpdateOperationsInput | undefined;
    saturday?: IntFieldUpdateOperationsInput | undefined;
    sunday?: IntFieldUpdateOperationsInput | undefined;
    start_date?: StringFieldUpdateOperationsInput | undefined;
    end_date?: StringFieldUpdateOperationsInput | undefined;
}
