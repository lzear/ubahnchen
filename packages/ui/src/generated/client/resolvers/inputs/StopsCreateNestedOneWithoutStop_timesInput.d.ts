import { StopsCreateOrConnectWithoutStop_timesInput } from "../inputs/StopsCreateOrConnectWithoutStop_timesInput";
import { StopsCreateWithoutStop_timesInput } from "../inputs/StopsCreateWithoutStop_timesInput";
import { StopsWhereUniqueInput } from "../inputs/StopsWhereUniqueInput";
export declare class StopsCreateNestedOneWithoutStop_timesInput {
    create?: StopsCreateWithoutStop_timesInput | undefined;
    connectOrCreate?: StopsCreateOrConnectWithoutStop_timesInput | undefined;
    connect?: StopsWhereUniqueInput | undefined;
}
