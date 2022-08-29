import { Stop_times } from "../../../models/Stop_times";
import { Stops } from "../../../models/Stops";
import { Trips } from "../../../models/Trips";
export declare class Stop_timesRelationsResolver {
    stops(stop_times: Stop_times, ctx: any): Promise<Stops>;
    trips(stop_times: Stop_times, ctx: any): Promise<Trips>;
}
