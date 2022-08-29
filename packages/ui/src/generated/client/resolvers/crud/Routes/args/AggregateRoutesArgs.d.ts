import { RoutesOrderByWithRelationInput } from "../../../inputs/RoutesOrderByWithRelationInput";
import { RoutesWhereInput } from "../../../inputs/RoutesWhereInput";
import { RoutesWhereUniqueInput } from "../../../inputs/RoutesWhereUniqueInput";
export declare class AggregateRoutesArgs {
    where?: RoutesWhereInput | undefined;
    orderBy?: RoutesOrderByWithRelationInput[] | undefined;
    cursor?: RoutesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
