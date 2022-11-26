import { RoutesOrderByWithRelationInput } from "../../../inputs/RoutesOrderByWithRelationInput";
import { RoutesWhereInput } from "../../../inputs/RoutesWhereInput";
import { RoutesWhereUniqueInput } from "../../../inputs/RoutesWhereUniqueInput";
export declare class FindFirstRoutesOrThrowArgs {
    where?: RoutesWhereInput | undefined;
    orderBy?: RoutesOrderByWithRelationInput[] | undefined;
    cursor?: RoutesWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"route_id" | "route_name"> | undefined;
}
