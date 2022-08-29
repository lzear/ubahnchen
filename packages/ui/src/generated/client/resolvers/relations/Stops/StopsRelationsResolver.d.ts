import { Stop_times } from "../../../models/Stop_times";
import { Stops } from "../../../models/Stops";
import { StopsStop_timesArgs } from "./args/StopsStop_timesArgs";
export declare class StopsRelationsResolver {
    stop_times(stops: Stops, ctx: any, args: StopsStop_timesArgs): Promise<Stop_times[]>;
}
