import { TripsCreateInput } from "../../../inputs/TripsCreateInput";
import { TripsUpdateInput } from "../../../inputs/TripsUpdateInput";
import { TripsWhereUniqueInput } from "../../../inputs/TripsWhereUniqueInput";
export declare class UpsertOneTripsArgs {
    where: TripsWhereUniqueInput;
    create: TripsCreateInput;
    update: TripsUpdateInput;
}
