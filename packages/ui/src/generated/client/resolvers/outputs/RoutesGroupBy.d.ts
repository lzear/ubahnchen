import { RoutesCountAggregate } from "../outputs/RoutesCountAggregate";
import { RoutesMaxAggregate } from "../outputs/RoutesMaxAggregate";
import { RoutesMinAggregate } from "../outputs/RoutesMinAggregate";
export declare class RoutesGroupBy {
    route_id: string;
    route_name: string;
    _count: RoutesCountAggregate | null;
    _min: RoutesMinAggregate | null;
    _max: RoutesMaxAggregate | null;
}
