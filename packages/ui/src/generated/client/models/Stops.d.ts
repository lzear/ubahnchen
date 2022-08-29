import { Stop_times } from "../models/Stop_times";
import { StopsCount } from "../resolvers/outputs/StopsCount";
export declare class Stops {
    stop_idx: number;
    stop_id: string;
    stop_name: string;
    stop_times?: Stop_times[];
    _count?: StopsCount | null;
}
