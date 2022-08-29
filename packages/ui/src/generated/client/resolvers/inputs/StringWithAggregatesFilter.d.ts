import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedStringFilter } from "../inputs/NestedStringFilter";
import { NestedStringWithAggregatesFilter } from "../inputs/NestedStringWithAggregatesFilter";
export declare class StringWithAggregatesFilter {
    equals?: string | undefined;
    in?: string[] | undefined;
    notIn?: string[] | undefined;
    lt?: string | undefined;
    lte?: string | undefined;
    gt?: string | undefined;
    gte?: string | undefined;
    contains?: string | undefined;
    startsWith?: string | undefined;
    endsWith?: string | undefined;
    not?: NestedStringWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedStringFilter | undefined;
    _max?: NestedStringFilter | undefined;
}
