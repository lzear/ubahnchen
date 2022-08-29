import { RoutesCountAggregate } from "../outputs/RoutesCountAggregate";
import { RoutesMaxAggregate } from "../outputs/RoutesMaxAggregate";
import { RoutesMinAggregate } from "../outputs/RoutesMinAggregate";
export declare class AggregateRoutes {
    _count: RoutesCountAggregate | null;
    _min: RoutesMinAggregate | null;
    _max: RoutesMaxAggregate | null;
}
