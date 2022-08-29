import { Routes } from "../../../models/Routes";
import { Trips } from "../../../models/Trips";
import { RoutesTripsArgs } from "./args/RoutesTripsArgs";
export declare class RoutesRelationsResolver {
    trips(routes: Routes, ctx: any, args: RoutesTripsArgs): Promise<Trips[]>;
}
