import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class IntFilter {
    equals?: number | undefined;
    in?: number[] | undefined;
    notIn?: number[] | undefined;
    lt?: number | undefined;
    lte?: number | undefined;
    gt?: number | undefined;
    gte?: number | undefined;
    not?: NestedIntFilter | undefined;
}
