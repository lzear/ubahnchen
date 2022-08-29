import { StopsCreateOrConnectWithoutStop_timesInput } from "../inputs/StopsCreateOrConnectWithoutStop_timesInput";
import { StopsCreateWithoutStop_timesInput } from "../inputs/StopsCreateWithoutStop_timesInput";
import { StopsUpdateWithoutStop_timesInput } from "../inputs/StopsUpdateWithoutStop_timesInput";
import { StopsUpsertWithoutStop_timesInput } from "../inputs/StopsUpsertWithoutStop_timesInput";
import { StopsWhereUniqueInput } from "../inputs/StopsWhereUniqueInput";
export declare class StopsUpdateOneRequiredWithoutStop_timesNestedInput {
    create?: StopsCreateWithoutStop_timesInput | undefined;
    connectOrCreate?: StopsCreateOrConnectWithoutStop_timesInput | undefined;
    upsert?: StopsUpsertWithoutStop_timesInput | undefined;
    connect?: StopsWhereUniqueInput | undefined;
    update?: StopsUpdateWithoutStop_timesInput | undefined;
}
