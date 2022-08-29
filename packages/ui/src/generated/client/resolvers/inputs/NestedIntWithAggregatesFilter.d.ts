import { NestedFloatFilter } from "../inputs/NestedFloatFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedIntWithAggregatesFilter {
    equals?: number | undefined;
    in?: number[] | undefined;
    notIn?: number[] | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    not?: NestedIntWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _avg?: NestedFloatFilter | undefined;
    _sum?: NestedIntFilter | undefined;
    _min?: NestedIntFilter | undefined;
    _max?: NestedIntFilter | undefined;
}
