import { StopsCreateInput } from "../../../inputs/StopsCreateInput";
import { StopsUpdateInput } from "../../../inputs/StopsUpdateInput";
import { StopsWhereUniqueInput } from "../../../inputs/StopsWhereUniqueInput";
export declare class UpsertOneStopsArgs {
    where: StopsWhereUniqueInput;
    create: StopsCreateInput;
    update: StopsUpdateInput;
}
