import { Stop_timesCreateNestedManyWithoutStopsInput } from "../inputs/Stop_timesCreateNestedManyWithoutStopsInput";
export declare class StopsCreateInput {
    stop_id: string;
    stop_name: string;
    stop_times?: Stop_timesCreateNestedManyWithoutStopsInput | undefined;
}
