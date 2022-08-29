export declare function transformFields(fields: Record<string, any>): Record<string, any>;
export declare function getPrismaFromContext(context: any): any;
export declare function transformCountFieldIntoSelectRelationsCount(_count: object): {
    include: {
        _count: {
            select: {
                [x: string]: any;
            };
        };
    };
};
