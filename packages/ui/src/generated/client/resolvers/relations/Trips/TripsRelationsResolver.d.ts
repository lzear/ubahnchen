import { Routes } from "../../../models/Routes";
import { Stop_times } from "../../../models/Stop_times";
import { Trips } from "../../../models/Trips";
import { TripsStop_timesArgs } from "./args/TripsStop_timesArgs";
export declare class TripsRelationsResolver {
    routes(trips: Trips, ctx: any): Promise<Routes>;
    stop_times(trips: Trips, ctx: any, args: TripsStop_timesArgs): Promise<Stop_times[]>;
}
