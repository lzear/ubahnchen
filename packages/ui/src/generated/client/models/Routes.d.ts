import { Trips } from "../models/Trips";
import { RoutesCount } from "../resolvers/outputs/RoutesCount";
export declare class Routes {
    route_id: string;
    route_name: string;
    trips?: Trips[];
    _count?: RoutesCount | null;
}
