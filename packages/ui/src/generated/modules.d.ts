
      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    

declare module '*/count-trips.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const CountTrips: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/routes.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const FindManyRoutes: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/stops.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const FindManyStops: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/trip.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const FindFirstTrip: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/trips-in-array.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const FindManyTrips: DocumentNode;

  export default defaultDocument;
}
    