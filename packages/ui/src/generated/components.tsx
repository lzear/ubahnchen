import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { myFetcher } from '../my-fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateCalendar = {
  __typename?: 'AggregateCalendar';
  _avg?: Maybe<CalendarAvgAggregate>;
  _count?: Maybe<CalendarCountAggregate>;
  _max?: Maybe<CalendarMaxAggregate>;
  _min?: Maybe<CalendarMinAggregate>;
  _sum?: Maybe<CalendarSumAggregate>;
};

export type AggregateCalendar_Dates = {
  __typename?: 'AggregateCalendar_dates';
  _avg?: Maybe<Calendar_DatesAvgAggregate>;
  _count?: Maybe<Calendar_DatesCountAggregate>;
  _max?: Maybe<Calendar_DatesMaxAggregate>;
  _min?: Maybe<Calendar_DatesMinAggregate>;
  _sum?: Maybe<Calendar_DatesSumAggregate>;
};

export type AggregateRoutes = {
  __typename?: 'AggregateRoutes';
  _count?: Maybe<RoutesCountAggregate>;
  _max?: Maybe<RoutesMaxAggregate>;
  _min?: Maybe<RoutesMinAggregate>;
};

export type AggregateStop_Times = {
  __typename?: 'AggregateStop_times';
  _avg?: Maybe<Stop_TimesAvgAggregate>;
  _count?: Maybe<Stop_TimesCountAggregate>;
  _max?: Maybe<Stop_TimesMaxAggregate>;
  _min?: Maybe<Stop_TimesMinAggregate>;
  _sum?: Maybe<Stop_TimesSumAggregate>;
};

export type AggregateStops = {
  __typename?: 'AggregateStops';
  _avg?: Maybe<StopsAvgAggregate>;
  _count?: Maybe<StopsCountAggregate>;
  _max?: Maybe<StopsMaxAggregate>;
  _min?: Maybe<StopsMinAggregate>;
  _sum?: Maybe<StopsSumAggregate>;
};

export type AggregateTrips = {
  __typename?: 'AggregateTrips';
  _avg?: Maybe<TripsAvgAggregate>;
  _count?: Maybe<TripsCountAggregate>;
  _max?: Maybe<TripsMaxAggregate>;
  _min?: Maybe<TripsMinAggregate>;
  _sum?: Maybe<TripsSumAggregate>;
};

export type Calendar = {
  __typename?: 'Calendar';
  end_date: Scalars['String'];
  friday: Scalars['Int'];
  monday: Scalars['Int'];
  saturday: Scalars['Int'];
  service_id: Scalars['Int'];
  start_date: Scalars['String'];
  sunday: Scalars['Int'];
  thursday: Scalars['Int'];
  tuesday: Scalars['Int'];
  wednesday: Scalars['Int'];
};

export type CalendarAvgAggregate = {
  __typename?: 'CalendarAvgAggregate';
  friday?: Maybe<Scalars['Float']>;
  monday?: Maybe<Scalars['Float']>;
  saturday?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  sunday?: Maybe<Scalars['Float']>;
  thursday?: Maybe<Scalars['Float']>;
  tuesday?: Maybe<Scalars['Float']>;
  wednesday?: Maybe<Scalars['Float']>;
};

export type CalendarAvgOrderByAggregateInput = {
  friday?: InputMaybe<SortOrder>;
  monday?: InputMaybe<SortOrder>;
  saturday?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
  sunday?: InputMaybe<SortOrder>;
  thursday?: InputMaybe<SortOrder>;
  tuesday?: InputMaybe<SortOrder>;
  wednesday?: InputMaybe<SortOrder>;
};

export type CalendarCountAggregate = {
  __typename?: 'CalendarCountAggregate';
  _all: Scalars['Int'];
  end_date: Scalars['Int'];
  friday: Scalars['Int'];
  monday: Scalars['Int'];
  saturday: Scalars['Int'];
  service_id: Scalars['Int'];
  start_date: Scalars['Int'];
  sunday: Scalars['Int'];
  thursday: Scalars['Int'];
  tuesday: Scalars['Int'];
  wednesday: Scalars['Int'];
};

export type CalendarCountOrderByAggregateInput = {
  end_date?: InputMaybe<SortOrder>;
  friday?: InputMaybe<SortOrder>;
  monday?: InputMaybe<SortOrder>;
  saturday?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  sunday?: InputMaybe<SortOrder>;
  thursday?: InputMaybe<SortOrder>;
  tuesday?: InputMaybe<SortOrder>;
  wednesday?: InputMaybe<SortOrder>;
};

export type CalendarCreateInput = {
  end_date: Scalars['String'];
  friday: Scalars['Int'];
  monday: Scalars['Int'];
  saturday: Scalars['Int'];
  start_date: Scalars['String'];
  sunday: Scalars['Int'];
  thursday: Scalars['Int'];
  tuesday: Scalars['Int'];
  wednesday: Scalars['Int'];
};

export type CalendarGroupBy = {
  __typename?: 'CalendarGroupBy';
  _avg?: Maybe<CalendarAvgAggregate>;
  _count?: Maybe<CalendarCountAggregate>;
  _max?: Maybe<CalendarMaxAggregate>;
  _min?: Maybe<CalendarMinAggregate>;
  _sum?: Maybe<CalendarSumAggregate>;
  end_date: Scalars['String'];
  friday: Scalars['Int'];
  monday: Scalars['Int'];
  saturday: Scalars['Int'];
  service_id: Scalars['Int'];
  start_date: Scalars['String'];
  sunday: Scalars['Int'];
  thursday: Scalars['Int'];
  tuesday: Scalars['Int'];
  wednesday: Scalars['Int'];
};

export type CalendarMaxAggregate = {
  __typename?: 'CalendarMaxAggregate';
  end_date?: Maybe<Scalars['String']>;
  friday?: Maybe<Scalars['Int']>;
  monday?: Maybe<Scalars['Int']>;
  saturday?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['String']>;
  sunday?: Maybe<Scalars['Int']>;
  thursday?: Maybe<Scalars['Int']>;
  tuesday?: Maybe<Scalars['Int']>;
  wednesday?: Maybe<Scalars['Int']>;
};

export type CalendarMaxOrderByAggregateInput = {
  end_date?: InputMaybe<SortOrder>;
  friday?: InputMaybe<SortOrder>;
  monday?: InputMaybe<SortOrder>;
  saturday?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  sunday?: InputMaybe<SortOrder>;
  thursday?: InputMaybe<SortOrder>;
  tuesday?: InputMaybe<SortOrder>;
  wednesday?: InputMaybe<SortOrder>;
};

export type CalendarMinAggregate = {
  __typename?: 'CalendarMinAggregate';
  end_date?: Maybe<Scalars['String']>;
  friday?: Maybe<Scalars['Int']>;
  monday?: Maybe<Scalars['Int']>;
  saturday?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['String']>;
  sunday?: Maybe<Scalars['Int']>;
  thursday?: Maybe<Scalars['Int']>;
  tuesday?: Maybe<Scalars['Int']>;
  wednesday?: Maybe<Scalars['Int']>;
};

export type CalendarMinOrderByAggregateInput = {
  end_date?: InputMaybe<SortOrder>;
  friday?: InputMaybe<SortOrder>;
  monday?: InputMaybe<SortOrder>;
  saturday?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  sunday?: InputMaybe<SortOrder>;
  thursday?: InputMaybe<SortOrder>;
  tuesday?: InputMaybe<SortOrder>;
  wednesday?: InputMaybe<SortOrder>;
};

export type CalendarOrderByWithAggregationInput = {
  _avg?: InputMaybe<CalendarAvgOrderByAggregateInput>;
  _count?: InputMaybe<CalendarCountOrderByAggregateInput>;
  _max?: InputMaybe<CalendarMaxOrderByAggregateInput>;
  _min?: InputMaybe<CalendarMinOrderByAggregateInput>;
  _sum?: InputMaybe<CalendarSumOrderByAggregateInput>;
  end_date?: InputMaybe<SortOrder>;
  friday?: InputMaybe<SortOrder>;
  monday?: InputMaybe<SortOrder>;
  saturday?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  sunday?: InputMaybe<SortOrder>;
  thursday?: InputMaybe<SortOrder>;
  tuesday?: InputMaybe<SortOrder>;
  wednesday?: InputMaybe<SortOrder>;
};

export type CalendarOrderByWithRelationInput = {
  end_date?: InputMaybe<SortOrder>;
  friday?: InputMaybe<SortOrder>;
  monday?: InputMaybe<SortOrder>;
  saturday?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
  start_date?: InputMaybe<SortOrder>;
  sunday?: InputMaybe<SortOrder>;
  thursday?: InputMaybe<SortOrder>;
  tuesday?: InputMaybe<SortOrder>;
  wednesday?: InputMaybe<SortOrder>;
};

export enum CalendarScalarFieldEnum {
  EndDate = 'end_date',
  Friday = 'friday',
  Monday = 'monday',
  Saturday = 'saturday',
  ServiceId = 'service_id',
  StartDate = 'start_date',
  Sunday = 'sunday',
  Thursday = 'thursday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday'
}

export type CalendarScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CalendarScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CalendarScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CalendarScalarWhereWithAggregatesInput>>;
  end_date?: InputMaybe<StringWithAggregatesFilter>;
  friday?: InputMaybe<IntWithAggregatesFilter>;
  monday?: InputMaybe<IntWithAggregatesFilter>;
  saturday?: InputMaybe<IntWithAggregatesFilter>;
  service_id?: InputMaybe<IntWithAggregatesFilter>;
  start_date?: InputMaybe<StringWithAggregatesFilter>;
  sunday?: InputMaybe<IntWithAggregatesFilter>;
  thursday?: InputMaybe<IntWithAggregatesFilter>;
  tuesday?: InputMaybe<IntWithAggregatesFilter>;
  wednesday?: InputMaybe<IntWithAggregatesFilter>;
};

export type CalendarSumAggregate = {
  __typename?: 'CalendarSumAggregate';
  friday?: Maybe<Scalars['Int']>;
  monday?: Maybe<Scalars['Int']>;
  saturday?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
  sunday?: Maybe<Scalars['Int']>;
  thursday?: Maybe<Scalars['Int']>;
  tuesday?: Maybe<Scalars['Int']>;
  wednesday?: Maybe<Scalars['Int']>;
};

export type CalendarSumOrderByAggregateInput = {
  friday?: InputMaybe<SortOrder>;
  monday?: InputMaybe<SortOrder>;
  saturday?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
  sunday?: InputMaybe<SortOrder>;
  thursday?: InputMaybe<SortOrder>;
  tuesday?: InputMaybe<SortOrder>;
  wednesday?: InputMaybe<SortOrder>;
};

export type CalendarUpdateInput = {
  end_date?: InputMaybe<StringFieldUpdateOperationsInput>;
  friday?: InputMaybe<IntFieldUpdateOperationsInput>;
  monday?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturday?: InputMaybe<IntFieldUpdateOperationsInput>;
  start_date?: InputMaybe<StringFieldUpdateOperationsInput>;
  sunday?: InputMaybe<IntFieldUpdateOperationsInput>;
  thursday?: InputMaybe<IntFieldUpdateOperationsInput>;
  tuesday?: InputMaybe<IntFieldUpdateOperationsInput>;
  wednesday?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CalendarUpdateManyMutationInput = {
  end_date?: InputMaybe<StringFieldUpdateOperationsInput>;
  friday?: InputMaybe<IntFieldUpdateOperationsInput>;
  monday?: InputMaybe<IntFieldUpdateOperationsInput>;
  saturday?: InputMaybe<IntFieldUpdateOperationsInput>;
  start_date?: InputMaybe<StringFieldUpdateOperationsInput>;
  sunday?: InputMaybe<IntFieldUpdateOperationsInput>;
  thursday?: InputMaybe<IntFieldUpdateOperationsInput>;
  tuesday?: InputMaybe<IntFieldUpdateOperationsInput>;
  wednesday?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type CalendarWhereInput = {
  AND?: InputMaybe<Array<CalendarWhereInput>>;
  NOT?: InputMaybe<Array<CalendarWhereInput>>;
  OR?: InputMaybe<Array<CalendarWhereInput>>;
  end_date?: InputMaybe<StringFilter>;
  friday?: InputMaybe<IntFilter>;
  monday?: InputMaybe<IntFilter>;
  saturday?: InputMaybe<IntFilter>;
  service_id?: InputMaybe<IntFilter>;
  start_date?: InputMaybe<StringFilter>;
  sunday?: InputMaybe<IntFilter>;
  thursday?: InputMaybe<IntFilter>;
  tuesday?: InputMaybe<IntFilter>;
  wednesday?: InputMaybe<IntFilter>;
};

export type CalendarWhereUniqueInput = {
  service_id?: InputMaybe<Scalars['Int']>;
};

export type Calendar_Dates = {
  __typename?: 'Calendar_dates';
  date: Scalars['String'];
  idx: Scalars['Int'];
  is_removing: Scalars['Int'];
  service_id: Scalars['Int'];
};

export type Calendar_DatesAvgAggregate = {
  __typename?: 'Calendar_datesAvgAggregate';
  idx?: Maybe<Scalars['Float']>;
  is_removing?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
};

export type Calendar_DatesAvgOrderByAggregateInput = {
  idx?: InputMaybe<SortOrder>;
  is_removing?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
};

export type Calendar_DatesCountAggregate = {
  __typename?: 'Calendar_datesCountAggregate';
  _all: Scalars['Int'];
  date: Scalars['Int'];
  idx: Scalars['Int'];
  is_removing: Scalars['Int'];
  service_id: Scalars['Int'];
};

export type Calendar_DatesCountOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  idx?: InputMaybe<SortOrder>;
  is_removing?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
};

export type Calendar_DatesCreateInput = {
  date: Scalars['String'];
  is_removing: Scalars['Int'];
  service_id: Scalars['Int'];
};

export type Calendar_DatesGroupBy = {
  __typename?: 'Calendar_datesGroupBy';
  _avg?: Maybe<Calendar_DatesAvgAggregate>;
  _count?: Maybe<Calendar_DatesCountAggregate>;
  _max?: Maybe<Calendar_DatesMaxAggregate>;
  _min?: Maybe<Calendar_DatesMinAggregate>;
  _sum?: Maybe<Calendar_DatesSumAggregate>;
  date: Scalars['String'];
  idx: Scalars['Int'];
  is_removing: Scalars['Int'];
  service_id: Scalars['Int'];
};

export type Calendar_DatesMaxAggregate = {
  __typename?: 'Calendar_datesMaxAggregate';
  date?: Maybe<Scalars['String']>;
  idx?: Maybe<Scalars['Int']>;
  is_removing?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
};

export type Calendar_DatesMaxOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  idx?: InputMaybe<SortOrder>;
  is_removing?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
};

export type Calendar_DatesMinAggregate = {
  __typename?: 'Calendar_datesMinAggregate';
  date?: Maybe<Scalars['String']>;
  idx?: Maybe<Scalars['Int']>;
  is_removing?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
};

export type Calendar_DatesMinOrderByAggregateInput = {
  date?: InputMaybe<SortOrder>;
  idx?: InputMaybe<SortOrder>;
  is_removing?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
};

export type Calendar_DatesOrderByWithAggregationInput = {
  _avg?: InputMaybe<Calendar_DatesAvgOrderByAggregateInput>;
  _count?: InputMaybe<Calendar_DatesCountOrderByAggregateInput>;
  _max?: InputMaybe<Calendar_DatesMaxOrderByAggregateInput>;
  _min?: InputMaybe<Calendar_DatesMinOrderByAggregateInput>;
  _sum?: InputMaybe<Calendar_DatesSumOrderByAggregateInput>;
  date?: InputMaybe<SortOrder>;
  idx?: InputMaybe<SortOrder>;
  is_removing?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
};

export type Calendar_DatesOrderByWithRelationInput = {
  date?: InputMaybe<SortOrder>;
  idx?: InputMaybe<SortOrder>;
  is_removing?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
};

export enum Calendar_DatesScalarFieldEnum {
  Date = 'date',
  Idx = 'idx',
  IsRemoving = 'is_removing',
  ServiceId = 'service_id'
}

export type Calendar_DatesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<Calendar_DatesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<Calendar_DatesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<Calendar_DatesScalarWhereWithAggregatesInput>>;
  date?: InputMaybe<StringWithAggregatesFilter>;
  idx?: InputMaybe<IntWithAggregatesFilter>;
  is_removing?: InputMaybe<IntWithAggregatesFilter>;
  service_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type Calendar_DatesSumAggregate = {
  __typename?: 'Calendar_datesSumAggregate';
  idx?: Maybe<Scalars['Int']>;
  is_removing?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
};

export type Calendar_DatesSumOrderByAggregateInput = {
  idx?: InputMaybe<SortOrder>;
  is_removing?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
};

export type Calendar_DatesUpdateInput = {
  date?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_removing?: InputMaybe<IntFieldUpdateOperationsInput>;
  service_id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type Calendar_DatesUpdateManyMutationInput = {
  date?: InputMaybe<StringFieldUpdateOperationsInput>;
  is_removing?: InputMaybe<IntFieldUpdateOperationsInput>;
  service_id?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type Calendar_DatesWhereInput = {
  AND?: InputMaybe<Array<Calendar_DatesWhereInput>>;
  NOT?: InputMaybe<Array<Calendar_DatesWhereInput>>;
  OR?: InputMaybe<Array<Calendar_DatesWhereInput>>;
  date?: InputMaybe<StringFilter>;
  idx?: InputMaybe<IntFilter>;
  is_removing?: InputMaybe<IntFilter>;
  service_id?: InputMaybe<IntFilter>;
};

export type Calendar_DatesWhereUniqueInput = {
  idx?: InputMaybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createOneCalendar: Calendar;
  createOneCalendar_dates: Calendar_Dates;
  createOneRoutes: Routes;
  createOneStop_times: Stop_Times;
  createOneStops: Stops;
  createOneTrips: Trips;
  deleteManyCalendar: AffectedRowsOutput;
  deleteManyCalendar_dates: AffectedRowsOutput;
  deleteManyRoutes: AffectedRowsOutput;
  deleteManyStop_times: AffectedRowsOutput;
  deleteManyStops: AffectedRowsOutput;
  deleteManyTrips: AffectedRowsOutput;
  deleteOneCalendar?: Maybe<Calendar>;
  deleteOneCalendar_dates?: Maybe<Calendar_Dates>;
  deleteOneRoutes?: Maybe<Routes>;
  deleteOneStop_times?: Maybe<Stop_Times>;
  deleteOneStops?: Maybe<Stops>;
  deleteOneTrips?: Maybe<Trips>;
  updateManyCalendar: AffectedRowsOutput;
  updateManyCalendar_dates: AffectedRowsOutput;
  updateManyRoutes: AffectedRowsOutput;
  updateManyStop_times: AffectedRowsOutput;
  updateManyStops: AffectedRowsOutput;
  updateManyTrips: AffectedRowsOutput;
  updateOneCalendar?: Maybe<Calendar>;
  updateOneCalendar_dates?: Maybe<Calendar_Dates>;
  updateOneRoutes?: Maybe<Routes>;
  updateOneStop_times?: Maybe<Stop_Times>;
  updateOneStops?: Maybe<Stops>;
  updateOneTrips?: Maybe<Trips>;
  upsertOneCalendar: Calendar;
  upsertOneCalendar_dates: Calendar_Dates;
  upsertOneRoutes: Routes;
  upsertOneStop_times: Stop_Times;
  upsertOneStops: Stops;
  upsertOneTrips: Trips;
};


export type MutationCreateOneCalendarArgs = {
  data: CalendarCreateInput;
};


export type MutationCreateOneCalendar_DatesArgs = {
  data: Calendar_DatesCreateInput;
};


export type MutationCreateOneRoutesArgs = {
  data: RoutesCreateInput;
};


export type MutationCreateOneStop_TimesArgs = {
  data: Stop_TimesCreateInput;
};


export type MutationCreateOneStopsArgs = {
  data: StopsCreateInput;
};


export type MutationCreateOneTripsArgs = {
  data: TripsCreateInput;
};


export type MutationDeleteManyCalendarArgs = {
  where?: InputMaybe<CalendarWhereInput>;
};


export type MutationDeleteManyCalendar_DatesArgs = {
  where?: InputMaybe<Calendar_DatesWhereInput>;
};


export type MutationDeleteManyRoutesArgs = {
  where?: InputMaybe<RoutesWhereInput>;
};


export type MutationDeleteManyStop_TimesArgs = {
  where?: InputMaybe<Stop_TimesWhereInput>;
};


export type MutationDeleteManyStopsArgs = {
  where?: InputMaybe<StopsWhereInput>;
};


export type MutationDeleteManyTripsArgs = {
  where?: InputMaybe<TripsWhereInput>;
};


export type MutationDeleteOneCalendarArgs = {
  where: CalendarWhereUniqueInput;
};


export type MutationDeleteOneCalendar_DatesArgs = {
  where: Calendar_DatesWhereUniqueInput;
};


export type MutationDeleteOneRoutesArgs = {
  where: RoutesWhereUniqueInput;
};


export type MutationDeleteOneStop_TimesArgs = {
  where: Stop_TimesWhereUniqueInput;
};


export type MutationDeleteOneStopsArgs = {
  where: StopsWhereUniqueInput;
};


export type MutationDeleteOneTripsArgs = {
  where: TripsWhereUniqueInput;
};


export type MutationUpdateManyCalendarArgs = {
  data: CalendarUpdateManyMutationInput;
  where?: InputMaybe<CalendarWhereInput>;
};


export type MutationUpdateManyCalendar_DatesArgs = {
  data: Calendar_DatesUpdateManyMutationInput;
  where?: InputMaybe<Calendar_DatesWhereInput>;
};


export type MutationUpdateManyRoutesArgs = {
  data: RoutesUpdateManyMutationInput;
  where?: InputMaybe<RoutesWhereInput>;
};


export type MutationUpdateManyStop_TimesArgs = {
  data: Stop_TimesUpdateManyMutationInput;
  where?: InputMaybe<Stop_TimesWhereInput>;
};


export type MutationUpdateManyStopsArgs = {
  data: StopsUpdateManyMutationInput;
  where?: InputMaybe<StopsWhereInput>;
};


export type MutationUpdateManyTripsArgs = {
  data: TripsUpdateManyMutationInput;
  where?: InputMaybe<TripsWhereInput>;
};


export type MutationUpdateOneCalendarArgs = {
  data: CalendarUpdateInput;
  where: CalendarWhereUniqueInput;
};


export type MutationUpdateOneCalendar_DatesArgs = {
  data: Calendar_DatesUpdateInput;
  where: Calendar_DatesWhereUniqueInput;
};


export type MutationUpdateOneRoutesArgs = {
  data: RoutesUpdateInput;
  where: RoutesWhereUniqueInput;
};


export type MutationUpdateOneStop_TimesArgs = {
  data: Stop_TimesUpdateInput;
  where: Stop_TimesWhereUniqueInput;
};


export type MutationUpdateOneStopsArgs = {
  data: StopsUpdateInput;
  where: StopsWhereUniqueInput;
};


export type MutationUpdateOneTripsArgs = {
  data: TripsUpdateInput;
  where: TripsWhereUniqueInput;
};


export type MutationUpsertOneCalendarArgs = {
  create: CalendarCreateInput;
  update: CalendarUpdateInput;
  where: CalendarWhereUniqueInput;
};


export type MutationUpsertOneCalendar_DatesArgs = {
  create: Calendar_DatesCreateInput;
  update: Calendar_DatesUpdateInput;
  where: Calendar_DatesWhereUniqueInput;
};


export type MutationUpsertOneRoutesArgs = {
  create: RoutesCreateInput;
  update: RoutesUpdateInput;
  where: RoutesWhereUniqueInput;
};


export type MutationUpsertOneStop_TimesArgs = {
  create: Stop_TimesCreateInput;
  update: Stop_TimesUpdateInput;
  where: Stop_TimesWhereUniqueInput;
};


export type MutationUpsertOneStopsArgs = {
  create: StopsCreateInput;
  update: StopsUpdateInput;
  where: StopsWhereUniqueInput;
};


export type MutationUpsertOneTripsArgs = {
  create: TripsCreateInput;
  update: TripsUpdateInput;
  where: TripsWhereUniqueInput;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateCalendar: AggregateCalendar;
  aggregateCalendar_dates: AggregateCalendar_Dates;
  aggregateRoutes: AggregateRoutes;
  aggregateStop_times: AggregateStop_Times;
  aggregateStops: AggregateStops;
  aggregateTrips: AggregateTrips;
  calendar?: Maybe<Calendar>;
  calendars: Array<Calendar>;
  findFirstCalendar?: Maybe<Calendar>;
  findFirstCalendar_dates?: Maybe<Calendar_Dates>;
  findFirstRoutes?: Maybe<Routes>;
  findFirstStop_times?: Maybe<Stop_Times>;
  findFirstStops?: Maybe<Stops>;
  findFirstTrips?: Maybe<Trips>;
  findManyCalendar_dates: Array<Calendar_Dates>;
  findManyRoutes: Array<Routes>;
  findManyStop_times: Array<Stop_Times>;
  findManyStops: Array<Stops>;
  findManyTrips: Array<Trips>;
  findUniqueCalendar_dates?: Maybe<Calendar_Dates>;
  findUniqueRoutes?: Maybe<Routes>;
  findUniqueStop_times?: Maybe<Stop_Times>;
  findUniqueStops?: Maybe<Stops>;
  findUniqueTrips?: Maybe<Trips>;
  groupByCalendar: Array<CalendarGroupBy>;
  groupByCalendar_dates: Array<Calendar_DatesGroupBy>;
  groupByRoutes: Array<RoutesGroupBy>;
  groupByStop_times: Array<Stop_TimesGroupBy>;
  groupByStops: Array<StopsGroupBy>;
  groupByTrips: Array<TripsGroupBy>;
};


export type QueryAggregateCalendarArgs = {
  cursor?: InputMaybe<CalendarWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CalendarOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CalendarWhereInput>;
};


export type QueryAggregateCalendar_DatesArgs = {
  cursor?: InputMaybe<Calendar_DatesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<Calendar_DatesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Calendar_DatesWhereInput>;
};


export type QueryAggregateRoutesArgs = {
  cursor?: InputMaybe<RoutesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RoutesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoutesWhereInput>;
};


export type QueryAggregateStop_TimesArgs = {
  cursor?: InputMaybe<Stop_TimesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<Stop_TimesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Stop_TimesWhereInput>;
};


export type QueryAggregateStopsArgs = {
  cursor?: InputMaybe<StopsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<StopsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StopsWhereInput>;
};


export type QueryAggregateTripsArgs = {
  cursor?: InputMaybe<TripsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TripsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TripsWhereInput>;
};


export type QueryCalendarArgs = {
  where: CalendarWhereUniqueInput;
};


export type QueryCalendarsArgs = {
  cursor?: InputMaybe<CalendarWhereUniqueInput>;
  distinct?: InputMaybe<Array<CalendarScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CalendarOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CalendarWhereInput>;
};


export type QueryFindFirstCalendarArgs = {
  cursor?: InputMaybe<CalendarWhereUniqueInput>;
  distinct?: InputMaybe<Array<CalendarScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CalendarOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CalendarWhereInput>;
};


export type QueryFindFirstCalendar_DatesArgs = {
  cursor?: InputMaybe<Calendar_DatesWhereUniqueInput>;
  distinct?: InputMaybe<Array<Calendar_DatesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Calendar_DatesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Calendar_DatesWhereInput>;
};


export type QueryFindFirstRoutesArgs = {
  cursor?: InputMaybe<RoutesWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoutesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoutesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoutesWhereInput>;
};


export type QueryFindFirstStop_TimesArgs = {
  cursor?: InputMaybe<Stop_TimesWhereUniqueInput>;
  distinct?: InputMaybe<Array<Stop_TimesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Stop_TimesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Stop_TimesWhereInput>;
};


export type QueryFindFirstStopsArgs = {
  cursor?: InputMaybe<StopsWhereUniqueInput>;
  distinct?: InputMaybe<Array<StopsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StopsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StopsWhereInput>;
};


export type QueryFindFirstTripsArgs = {
  cursor?: InputMaybe<TripsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TripsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TripsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TripsWhereInput>;
};


export type QueryFindManyCalendar_DatesArgs = {
  cursor?: InputMaybe<Calendar_DatesWhereUniqueInput>;
  distinct?: InputMaybe<Array<Calendar_DatesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Calendar_DatesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Calendar_DatesWhereInput>;
};


export type QueryFindManyRoutesArgs = {
  cursor?: InputMaybe<RoutesWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoutesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoutesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoutesWhereInput>;
};


export type QueryFindManyStop_TimesArgs = {
  cursor?: InputMaybe<Stop_TimesWhereUniqueInput>;
  distinct?: InputMaybe<Array<Stop_TimesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Stop_TimesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Stop_TimesWhereInput>;
};


export type QueryFindManyStopsArgs = {
  cursor?: InputMaybe<StopsWhereUniqueInput>;
  distinct?: InputMaybe<Array<StopsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<StopsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StopsWhereInput>;
};


export type QueryFindManyTripsArgs = {
  cursor?: InputMaybe<TripsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TripsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TripsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TripsWhereInput>;
};


export type QueryFindUniqueCalendar_DatesArgs = {
  where: Calendar_DatesWhereUniqueInput;
};


export type QueryFindUniqueRoutesArgs = {
  where: RoutesWhereUniqueInput;
};


export type QueryFindUniqueStop_TimesArgs = {
  where: Stop_TimesWhereUniqueInput;
};


export type QueryFindUniqueStopsArgs = {
  where: StopsWhereUniqueInput;
};


export type QueryFindUniqueTripsArgs = {
  where: TripsWhereUniqueInput;
};


export type QueryGroupByCalendarArgs = {
  by: Array<CalendarScalarFieldEnum>;
  having?: InputMaybe<CalendarScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CalendarOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CalendarWhereInput>;
};


export type QueryGroupByCalendar_DatesArgs = {
  by: Array<Calendar_DatesScalarFieldEnum>;
  having?: InputMaybe<Calendar_DatesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<Calendar_DatesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Calendar_DatesWhereInput>;
};


export type QueryGroupByRoutesArgs = {
  by: Array<RoutesScalarFieldEnum>;
  having?: InputMaybe<RoutesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RoutesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoutesWhereInput>;
};


export type QueryGroupByStop_TimesArgs = {
  by: Array<Stop_TimesScalarFieldEnum>;
  having?: InputMaybe<Stop_TimesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<Stop_TimesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Stop_TimesWhereInput>;
};


export type QueryGroupByStopsArgs = {
  by: Array<StopsScalarFieldEnum>;
  having?: InputMaybe<StopsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<StopsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<StopsWhereInput>;
};


export type QueryGroupByTripsArgs = {
  by: Array<TripsScalarFieldEnum>;
  having?: InputMaybe<TripsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TripsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TripsWhereInput>;
};

export type Routes = {
  __typename?: 'Routes';
  _count?: Maybe<RoutesCount>;
  route_id: Scalars['String'];
  route_name: Scalars['String'];
  trips: Array<Trips>;
};


export type RoutesTripsArgs = {
  cursor?: InputMaybe<TripsWhereUniqueInput>;
  distinct?: InputMaybe<Array<TripsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TripsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TripsWhereInput>;
};

export type RoutesCount = {
  __typename?: 'RoutesCount';
  trips: Scalars['Int'];
};

export type RoutesCountAggregate = {
  __typename?: 'RoutesCountAggregate';
  _all: Scalars['Int'];
  route_id: Scalars['Int'];
  route_name: Scalars['Int'];
};

export type RoutesCountOrderByAggregateInput = {
  route_id?: InputMaybe<SortOrder>;
  route_name?: InputMaybe<SortOrder>;
};

export type RoutesCreateInput = {
  route_id: Scalars['String'];
  route_name: Scalars['String'];
  trips?: InputMaybe<TripsCreateNestedManyWithoutRoutesInput>;
};

export type RoutesCreateNestedOneWithoutTripsInput = {
  connect?: InputMaybe<RoutesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoutesCreateOrConnectWithoutTripsInput>;
  create?: InputMaybe<RoutesCreateWithoutTripsInput>;
};

export type RoutesCreateOrConnectWithoutTripsInput = {
  create: RoutesCreateWithoutTripsInput;
  where: RoutesWhereUniqueInput;
};

export type RoutesCreateWithoutTripsInput = {
  route_id: Scalars['String'];
  route_name: Scalars['String'];
};

export type RoutesGroupBy = {
  __typename?: 'RoutesGroupBy';
  _count?: Maybe<RoutesCountAggregate>;
  _max?: Maybe<RoutesMaxAggregate>;
  _min?: Maybe<RoutesMinAggregate>;
  route_id: Scalars['String'];
  route_name: Scalars['String'];
};

export type RoutesMaxAggregate = {
  __typename?: 'RoutesMaxAggregate';
  route_id?: Maybe<Scalars['String']>;
  route_name?: Maybe<Scalars['String']>;
};

export type RoutesMaxOrderByAggregateInput = {
  route_id?: InputMaybe<SortOrder>;
  route_name?: InputMaybe<SortOrder>;
};

export type RoutesMinAggregate = {
  __typename?: 'RoutesMinAggregate';
  route_id?: Maybe<Scalars['String']>;
  route_name?: Maybe<Scalars['String']>;
};

export type RoutesMinOrderByAggregateInput = {
  route_id?: InputMaybe<SortOrder>;
  route_name?: InputMaybe<SortOrder>;
};

export type RoutesOrderByWithAggregationInput = {
  _count?: InputMaybe<RoutesCountOrderByAggregateInput>;
  _max?: InputMaybe<RoutesMaxOrderByAggregateInput>;
  _min?: InputMaybe<RoutesMinOrderByAggregateInput>;
  route_id?: InputMaybe<SortOrder>;
  route_name?: InputMaybe<SortOrder>;
};

export type RoutesOrderByWithRelationInput = {
  route_id?: InputMaybe<SortOrder>;
  route_name?: InputMaybe<SortOrder>;
  trips?: InputMaybe<TripsOrderByRelationAggregateInput>;
};

export type RoutesRelationFilter = {
  is?: InputMaybe<RoutesWhereInput>;
  isNot?: InputMaybe<RoutesWhereInput>;
};

export enum RoutesScalarFieldEnum {
  RouteId = 'route_id',
  RouteName = 'route_name'
}

export type RoutesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RoutesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RoutesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RoutesScalarWhereWithAggregatesInput>>;
  route_id?: InputMaybe<StringWithAggregatesFilter>;
  route_name?: InputMaybe<StringWithAggregatesFilter>;
};

export type RoutesUpdateInput = {
  route_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  route_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  trips?: InputMaybe<TripsUpdateManyWithoutRoutesNestedInput>;
};

export type RoutesUpdateManyMutationInput = {
  route_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  route_name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoutesUpdateOneRequiredWithoutTripsNestedInput = {
  connect?: InputMaybe<RoutesWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoutesCreateOrConnectWithoutTripsInput>;
  create?: InputMaybe<RoutesCreateWithoutTripsInput>;
  update?: InputMaybe<RoutesUpdateWithoutTripsInput>;
  upsert?: InputMaybe<RoutesUpsertWithoutTripsInput>;
};

export type RoutesUpdateWithoutTripsInput = {
  route_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  route_name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type RoutesUpsertWithoutTripsInput = {
  create: RoutesCreateWithoutTripsInput;
  update: RoutesUpdateWithoutTripsInput;
};

export type RoutesWhereInput = {
  AND?: InputMaybe<Array<RoutesWhereInput>>;
  NOT?: InputMaybe<Array<RoutesWhereInput>>;
  OR?: InputMaybe<Array<RoutesWhereInput>>;
  route_id?: InputMaybe<StringFilter>;
  route_name?: InputMaybe<StringFilter>;
  trips?: InputMaybe<TripsListRelationFilter>;
};

export type RoutesWhereUniqueInput = {
  route_id?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Stop_Times = {
  __typename?: 'Stop_times';
  arrival_time: Scalars['Int'];
  departure_time: Scalars['Int'];
  idx: Scalars['Int'];
  stop_idx: Scalars['Int'];
  stops: Stops;
  trip_id: Scalars['Int'];
  trips: Trips;
};

export type Stop_TimesAvgAggregate = {
  __typename?: 'Stop_timesAvgAggregate';
  arrival_time?: Maybe<Scalars['Float']>;
  departure_time?: Maybe<Scalars['Float']>;
  idx?: Maybe<Scalars['Float']>;
  stop_idx?: Maybe<Scalars['Float']>;
  trip_id?: Maybe<Scalars['Float']>;
};

export type Stop_TimesAvgOrderByAggregateInput = {
  arrival_time?: InputMaybe<SortOrder>;
  departure_time?: InputMaybe<SortOrder>;
  idx?: InputMaybe<SortOrder>;
  stop_idx?: InputMaybe<SortOrder>;
  trip_id?: InputMaybe<SortOrder>;
};

export type Stop_TimesCountAggregate = {
  __typename?: 'Stop_timesCountAggregate';
  _all: Scalars['Int'];
  arrival_time: Scalars['Int'];
  departure_time: Scalars['Int'];
  idx: Scalars['Int'];
  stop_idx: Scalars['Int'];
  trip_id: Scalars['Int'];
};

export type Stop_TimesCountOrderByAggregateInput = {
  arrival_time?: InputMaybe<SortOrder>;
  departure_time?: InputMaybe<SortOrder>;
  idx?: InputMaybe<SortOrder>;
  stop_idx?: InputMaybe<SortOrder>;
  trip_id?: InputMaybe<SortOrder>;
};

export type Stop_TimesCreateInput = {
  arrival_time: Scalars['Int'];
  departure_time: Scalars['Int'];
  stops: StopsCreateNestedOneWithoutStop_TimesInput;
  trips: TripsCreateNestedOneWithoutStop_TimesInput;
};

export type Stop_TimesCreateNestedManyWithoutStopsInput = {
  connect?: InputMaybe<Array<Stop_TimesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Stop_TimesCreateOrConnectWithoutStopsInput>>;
  create?: InputMaybe<Array<Stop_TimesCreateWithoutStopsInput>>;
};

export type Stop_TimesCreateNestedManyWithoutTripsInput = {
  connect?: InputMaybe<Array<Stop_TimesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Stop_TimesCreateOrConnectWithoutTripsInput>>;
  create?: InputMaybe<Array<Stop_TimesCreateWithoutTripsInput>>;
};

export type Stop_TimesCreateOrConnectWithoutStopsInput = {
  create: Stop_TimesCreateWithoutStopsInput;
  where: Stop_TimesWhereUniqueInput;
};

export type Stop_TimesCreateOrConnectWithoutTripsInput = {
  create: Stop_TimesCreateWithoutTripsInput;
  where: Stop_TimesWhereUniqueInput;
};

export type Stop_TimesCreateWithoutStopsInput = {
  arrival_time: Scalars['Int'];
  departure_time: Scalars['Int'];
  trips: TripsCreateNestedOneWithoutStop_TimesInput;
};

export type Stop_TimesCreateWithoutTripsInput = {
  arrival_time: Scalars['Int'];
  departure_time: Scalars['Int'];
  stops: StopsCreateNestedOneWithoutStop_TimesInput;
};

export type Stop_TimesGroupBy = {
  __typename?: 'Stop_timesGroupBy';
  _avg?: Maybe<Stop_TimesAvgAggregate>;
  _count?: Maybe<Stop_TimesCountAggregate>;
  _max?: Maybe<Stop_TimesMaxAggregate>;
  _min?: Maybe<Stop_TimesMinAggregate>;
  _sum?: Maybe<Stop_TimesSumAggregate>;
  arrival_time: Scalars['Int'];
  departure_time: Scalars['Int'];
  idx: Scalars['Int'];
  stop_idx: Scalars['Int'];
  trip_id: Scalars['Int'];
};

export type Stop_TimesListRelationFilter = {
  every?: InputMaybe<Stop_TimesWhereInput>;
  none?: InputMaybe<Stop_TimesWhereInput>;
  some?: InputMaybe<Stop_TimesWhereInput>;
};

export type Stop_TimesMaxAggregate = {
  __typename?: 'Stop_timesMaxAggregate';
  arrival_time?: Maybe<Scalars['Int']>;
  departure_time?: Maybe<Scalars['Int']>;
  idx?: Maybe<Scalars['Int']>;
  stop_idx?: Maybe<Scalars['Int']>;
  trip_id?: Maybe<Scalars['Int']>;
};

export type Stop_TimesMaxOrderByAggregateInput = {
  arrival_time?: InputMaybe<SortOrder>;
  departure_time?: InputMaybe<SortOrder>;
  idx?: InputMaybe<SortOrder>;
  stop_idx?: InputMaybe<SortOrder>;
  trip_id?: InputMaybe<SortOrder>;
};

export type Stop_TimesMinAggregate = {
  __typename?: 'Stop_timesMinAggregate';
  arrival_time?: Maybe<Scalars['Int']>;
  departure_time?: Maybe<Scalars['Int']>;
  idx?: Maybe<Scalars['Int']>;
  stop_idx?: Maybe<Scalars['Int']>;
  trip_id?: Maybe<Scalars['Int']>;
};

export type Stop_TimesMinOrderByAggregateInput = {
  arrival_time?: InputMaybe<SortOrder>;
  departure_time?: InputMaybe<SortOrder>;
  idx?: InputMaybe<SortOrder>;
  stop_idx?: InputMaybe<SortOrder>;
  trip_id?: InputMaybe<SortOrder>;
};

export type Stop_TimesOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Stop_TimesOrderByWithAggregationInput = {
  _avg?: InputMaybe<Stop_TimesAvgOrderByAggregateInput>;
  _count?: InputMaybe<Stop_TimesCountOrderByAggregateInput>;
  _max?: InputMaybe<Stop_TimesMaxOrderByAggregateInput>;
  _min?: InputMaybe<Stop_TimesMinOrderByAggregateInput>;
  _sum?: InputMaybe<Stop_TimesSumOrderByAggregateInput>;
  arrival_time?: InputMaybe<SortOrder>;
  departure_time?: InputMaybe<SortOrder>;
  idx?: InputMaybe<SortOrder>;
  stop_idx?: InputMaybe<SortOrder>;
  trip_id?: InputMaybe<SortOrder>;
};

export type Stop_TimesOrderByWithRelationInput = {
  arrival_time?: InputMaybe<SortOrder>;
  departure_time?: InputMaybe<SortOrder>;
  idx?: InputMaybe<SortOrder>;
  stop_idx?: InputMaybe<SortOrder>;
  stops?: InputMaybe<StopsOrderByWithRelationInput>;
  trip_id?: InputMaybe<SortOrder>;
  trips?: InputMaybe<TripsOrderByWithRelationInput>;
};

export enum Stop_TimesScalarFieldEnum {
  ArrivalTime = 'arrival_time',
  DepartureTime = 'departure_time',
  Idx = 'idx',
  StopIdx = 'stop_idx',
  TripId = 'trip_id'
}

export type Stop_TimesScalarWhereInput = {
  AND?: InputMaybe<Array<Stop_TimesScalarWhereInput>>;
  NOT?: InputMaybe<Array<Stop_TimesScalarWhereInput>>;
  OR?: InputMaybe<Array<Stop_TimesScalarWhereInput>>;
  arrival_time?: InputMaybe<IntFilter>;
  departure_time?: InputMaybe<IntFilter>;
  idx?: InputMaybe<IntFilter>;
  stop_idx?: InputMaybe<IntFilter>;
  trip_id?: InputMaybe<IntFilter>;
};

export type Stop_TimesScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<Stop_TimesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<Stop_TimesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<Stop_TimesScalarWhereWithAggregatesInput>>;
  arrival_time?: InputMaybe<IntWithAggregatesFilter>;
  departure_time?: InputMaybe<IntWithAggregatesFilter>;
  idx?: InputMaybe<IntWithAggregatesFilter>;
  stop_idx?: InputMaybe<IntWithAggregatesFilter>;
  trip_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type Stop_TimesSumAggregate = {
  __typename?: 'Stop_timesSumAggregate';
  arrival_time?: Maybe<Scalars['Int']>;
  departure_time?: Maybe<Scalars['Int']>;
  idx?: Maybe<Scalars['Int']>;
  stop_idx?: Maybe<Scalars['Int']>;
  trip_id?: Maybe<Scalars['Int']>;
};

export type Stop_TimesSumOrderByAggregateInput = {
  arrival_time?: InputMaybe<SortOrder>;
  departure_time?: InputMaybe<SortOrder>;
  idx?: InputMaybe<SortOrder>;
  stop_idx?: InputMaybe<SortOrder>;
  trip_id?: InputMaybe<SortOrder>;
};

export type Stop_TimesUpdateInput = {
  arrival_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  departure_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  stops?: InputMaybe<StopsUpdateOneRequiredWithoutStop_TimesNestedInput>;
  trips?: InputMaybe<TripsUpdateOneRequiredWithoutStop_TimesNestedInput>;
};

export type Stop_TimesUpdateManyMutationInput = {
  arrival_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  departure_time?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type Stop_TimesUpdateManyWithWhereWithoutStopsInput = {
  data: Stop_TimesUpdateManyMutationInput;
  where: Stop_TimesScalarWhereInput;
};

export type Stop_TimesUpdateManyWithWhereWithoutTripsInput = {
  data: Stop_TimesUpdateManyMutationInput;
  where: Stop_TimesScalarWhereInput;
};

export type Stop_TimesUpdateManyWithoutStopsNestedInput = {
  connect?: InputMaybe<Array<Stop_TimesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Stop_TimesCreateOrConnectWithoutStopsInput>>;
  create?: InputMaybe<Array<Stop_TimesCreateWithoutStopsInput>>;
  delete?: InputMaybe<Array<Stop_TimesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Stop_TimesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Stop_TimesWhereUniqueInput>>;
  set?: InputMaybe<Array<Stop_TimesWhereUniqueInput>>;
  update?: InputMaybe<Array<Stop_TimesUpdateWithWhereUniqueWithoutStopsInput>>;
  updateMany?: InputMaybe<Array<Stop_TimesUpdateManyWithWhereWithoutStopsInput>>;
  upsert?: InputMaybe<Array<Stop_TimesUpsertWithWhereUniqueWithoutStopsInput>>;
};

export type Stop_TimesUpdateManyWithoutTripsNestedInput = {
  connect?: InputMaybe<Array<Stop_TimesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<Stop_TimesCreateOrConnectWithoutTripsInput>>;
  create?: InputMaybe<Array<Stop_TimesCreateWithoutTripsInput>>;
  delete?: InputMaybe<Array<Stop_TimesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<Stop_TimesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<Stop_TimesWhereUniqueInput>>;
  set?: InputMaybe<Array<Stop_TimesWhereUniqueInput>>;
  update?: InputMaybe<Array<Stop_TimesUpdateWithWhereUniqueWithoutTripsInput>>;
  updateMany?: InputMaybe<Array<Stop_TimesUpdateManyWithWhereWithoutTripsInput>>;
  upsert?: InputMaybe<Array<Stop_TimesUpsertWithWhereUniqueWithoutTripsInput>>;
};

export type Stop_TimesUpdateWithWhereUniqueWithoutStopsInput = {
  data: Stop_TimesUpdateWithoutStopsInput;
  where: Stop_TimesWhereUniqueInput;
};

export type Stop_TimesUpdateWithWhereUniqueWithoutTripsInput = {
  data: Stop_TimesUpdateWithoutTripsInput;
  where: Stop_TimesWhereUniqueInput;
};

export type Stop_TimesUpdateWithoutStopsInput = {
  arrival_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  departure_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  trips?: InputMaybe<TripsUpdateOneRequiredWithoutStop_TimesNestedInput>;
};

export type Stop_TimesUpdateWithoutTripsInput = {
  arrival_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  departure_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  stops?: InputMaybe<StopsUpdateOneRequiredWithoutStop_TimesNestedInput>;
};

export type Stop_TimesUpsertWithWhereUniqueWithoutStopsInput = {
  create: Stop_TimesCreateWithoutStopsInput;
  update: Stop_TimesUpdateWithoutStopsInput;
  where: Stop_TimesWhereUniqueInput;
};

export type Stop_TimesUpsertWithWhereUniqueWithoutTripsInput = {
  create: Stop_TimesCreateWithoutTripsInput;
  update: Stop_TimesUpdateWithoutTripsInput;
  where: Stop_TimesWhereUniqueInput;
};

export type Stop_TimesWhereInput = {
  AND?: InputMaybe<Array<Stop_TimesWhereInput>>;
  NOT?: InputMaybe<Array<Stop_TimesWhereInput>>;
  OR?: InputMaybe<Array<Stop_TimesWhereInput>>;
  arrival_time?: InputMaybe<IntFilter>;
  departure_time?: InputMaybe<IntFilter>;
  idx?: InputMaybe<IntFilter>;
  stop_idx?: InputMaybe<IntFilter>;
  stops?: InputMaybe<StopsRelationFilter>;
  trip_id?: InputMaybe<IntFilter>;
  trips?: InputMaybe<TripsRelationFilter>;
};

export type Stop_TimesWhereUniqueInput = {
  idx?: InputMaybe<Scalars['Int']>;
};

export type Stops = {
  __typename?: 'Stops';
  _count?: Maybe<StopsCount>;
  stop_id: Scalars['String'];
  stop_idx: Scalars['Int'];
  stop_name: Scalars['String'];
  stop_times: Array<Stop_Times>;
};


export type StopsStop_TimesArgs = {
  cursor?: InputMaybe<Stop_TimesWhereUniqueInput>;
  distinct?: InputMaybe<Array<Stop_TimesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Stop_TimesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Stop_TimesWhereInput>;
};

export type StopsAvgAggregate = {
  __typename?: 'StopsAvgAggregate';
  stop_idx?: Maybe<Scalars['Float']>;
};

export type StopsAvgOrderByAggregateInput = {
  stop_idx?: InputMaybe<SortOrder>;
};

export type StopsCount = {
  __typename?: 'StopsCount';
  stop_times: Scalars['Int'];
};

export type StopsCountAggregate = {
  __typename?: 'StopsCountAggregate';
  _all: Scalars['Int'];
  stop_id: Scalars['Int'];
  stop_idx: Scalars['Int'];
  stop_name: Scalars['Int'];
};

export type StopsCountOrderByAggregateInput = {
  stop_id?: InputMaybe<SortOrder>;
  stop_idx?: InputMaybe<SortOrder>;
  stop_name?: InputMaybe<SortOrder>;
};

export type StopsCreateInput = {
  stop_id: Scalars['String'];
  stop_name: Scalars['String'];
  stop_times?: InputMaybe<Stop_TimesCreateNestedManyWithoutStopsInput>;
};

export type StopsCreateNestedOneWithoutStop_TimesInput = {
  connect?: InputMaybe<StopsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StopsCreateOrConnectWithoutStop_TimesInput>;
  create?: InputMaybe<StopsCreateWithoutStop_TimesInput>;
};

export type StopsCreateOrConnectWithoutStop_TimesInput = {
  create: StopsCreateWithoutStop_TimesInput;
  where: StopsWhereUniqueInput;
};

export type StopsCreateWithoutStop_TimesInput = {
  stop_id: Scalars['String'];
  stop_name: Scalars['String'];
};

export type StopsGroupBy = {
  __typename?: 'StopsGroupBy';
  _avg?: Maybe<StopsAvgAggregate>;
  _count?: Maybe<StopsCountAggregate>;
  _max?: Maybe<StopsMaxAggregate>;
  _min?: Maybe<StopsMinAggregate>;
  _sum?: Maybe<StopsSumAggregate>;
  stop_id: Scalars['String'];
  stop_idx: Scalars['Int'];
  stop_name: Scalars['String'];
};

export type StopsMaxAggregate = {
  __typename?: 'StopsMaxAggregate';
  stop_id?: Maybe<Scalars['String']>;
  stop_idx?: Maybe<Scalars['Int']>;
  stop_name?: Maybe<Scalars['String']>;
};

export type StopsMaxOrderByAggregateInput = {
  stop_id?: InputMaybe<SortOrder>;
  stop_idx?: InputMaybe<SortOrder>;
  stop_name?: InputMaybe<SortOrder>;
};

export type StopsMinAggregate = {
  __typename?: 'StopsMinAggregate';
  stop_id?: Maybe<Scalars['String']>;
  stop_idx?: Maybe<Scalars['Int']>;
  stop_name?: Maybe<Scalars['String']>;
};

export type StopsMinOrderByAggregateInput = {
  stop_id?: InputMaybe<SortOrder>;
  stop_idx?: InputMaybe<SortOrder>;
  stop_name?: InputMaybe<SortOrder>;
};

export type StopsOrderByWithAggregationInput = {
  _avg?: InputMaybe<StopsAvgOrderByAggregateInput>;
  _count?: InputMaybe<StopsCountOrderByAggregateInput>;
  _max?: InputMaybe<StopsMaxOrderByAggregateInput>;
  _min?: InputMaybe<StopsMinOrderByAggregateInput>;
  _sum?: InputMaybe<StopsSumOrderByAggregateInput>;
  stop_id?: InputMaybe<SortOrder>;
  stop_idx?: InputMaybe<SortOrder>;
  stop_name?: InputMaybe<SortOrder>;
};

export type StopsOrderByWithRelationInput = {
  stop_id?: InputMaybe<SortOrder>;
  stop_idx?: InputMaybe<SortOrder>;
  stop_name?: InputMaybe<SortOrder>;
  stop_times?: InputMaybe<Stop_TimesOrderByRelationAggregateInput>;
};

export type StopsRelationFilter = {
  is?: InputMaybe<StopsWhereInput>;
  isNot?: InputMaybe<StopsWhereInput>;
};

export enum StopsScalarFieldEnum {
  StopId = 'stop_id',
  StopIdx = 'stop_idx',
  StopName = 'stop_name'
}

export type StopsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<StopsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<StopsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<StopsScalarWhereWithAggregatesInput>>;
  stop_id?: InputMaybe<StringWithAggregatesFilter>;
  stop_idx?: InputMaybe<IntWithAggregatesFilter>;
  stop_name?: InputMaybe<StringWithAggregatesFilter>;
};

export type StopsSumAggregate = {
  __typename?: 'StopsSumAggregate';
  stop_idx?: Maybe<Scalars['Int']>;
};

export type StopsSumOrderByAggregateInput = {
  stop_idx?: InputMaybe<SortOrder>;
};

export type StopsUpdateInput = {
  stop_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  stop_name?: InputMaybe<StringFieldUpdateOperationsInput>;
  stop_times?: InputMaybe<Stop_TimesUpdateManyWithoutStopsNestedInput>;
};

export type StopsUpdateManyMutationInput = {
  stop_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  stop_name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StopsUpdateOneRequiredWithoutStop_TimesNestedInput = {
  connect?: InputMaybe<StopsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<StopsCreateOrConnectWithoutStop_TimesInput>;
  create?: InputMaybe<StopsCreateWithoutStop_TimesInput>;
  update?: InputMaybe<StopsUpdateWithoutStop_TimesInput>;
  upsert?: InputMaybe<StopsUpsertWithoutStop_TimesInput>;
};

export type StopsUpdateWithoutStop_TimesInput = {
  stop_id?: InputMaybe<StringFieldUpdateOperationsInput>;
  stop_name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type StopsUpsertWithoutStop_TimesInput = {
  create: StopsCreateWithoutStop_TimesInput;
  update: StopsUpdateWithoutStop_TimesInput;
};

export type StopsWhereInput = {
  AND?: InputMaybe<Array<StopsWhereInput>>;
  NOT?: InputMaybe<Array<StopsWhereInput>>;
  OR?: InputMaybe<Array<StopsWhereInput>>;
  stop_id?: InputMaybe<StringFilter>;
  stop_idx?: InputMaybe<IntFilter>;
  stop_name?: InputMaybe<StringFilter>;
  stop_times?: InputMaybe<Stop_TimesListRelationFilter>;
};

export type StopsWhereUniqueInput = {
  stop_idx?: InputMaybe<Scalars['Int']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Trips = {
  __typename?: 'Trips';
  _count?: Maybe<TripsCount>;
  end_time: Scalars['Int'];
  route_id: Scalars['String'];
  routes: Routes;
  service_id: Scalars['Int'];
  start_time: Scalars['Int'];
  stop_times: Array<Stop_Times>;
  trip_headsign: Scalars['String'];
  trip_id: Scalars['Int'];
};


export type TripsStop_TimesArgs = {
  cursor?: InputMaybe<Stop_TimesWhereUniqueInput>;
  distinct?: InputMaybe<Array<Stop_TimesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Stop_TimesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Stop_TimesWhereInput>;
};

export type TripsAvgAggregate = {
  __typename?: 'TripsAvgAggregate';
  end_time?: Maybe<Scalars['Float']>;
  service_id?: Maybe<Scalars['Float']>;
  start_time?: Maybe<Scalars['Float']>;
  trip_id?: Maybe<Scalars['Float']>;
};

export type TripsAvgOrderByAggregateInput = {
  end_time?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  trip_id?: InputMaybe<SortOrder>;
};

export type TripsCount = {
  __typename?: 'TripsCount';
  stop_times: Scalars['Int'];
};

export type TripsCountAggregate = {
  __typename?: 'TripsCountAggregate';
  _all: Scalars['Int'];
  end_time: Scalars['Int'];
  route_id: Scalars['Int'];
  service_id: Scalars['Int'];
  start_time: Scalars['Int'];
  trip_headsign: Scalars['Int'];
  trip_id: Scalars['Int'];
};

export type TripsCountOrderByAggregateInput = {
  end_time?: InputMaybe<SortOrder>;
  route_id?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  trip_headsign?: InputMaybe<SortOrder>;
  trip_id?: InputMaybe<SortOrder>;
};

export type TripsCreateInput = {
  end_time: Scalars['Int'];
  routes: RoutesCreateNestedOneWithoutTripsInput;
  service_id: Scalars['Int'];
  start_time: Scalars['Int'];
  stop_times?: InputMaybe<Stop_TimesCreateNestedManyWithoutTripsInput>;
  trip_headsign: Scalars['String'];
};

export type TripsCreateNestedManyWithoutRoutesInput = {
  connect?: InputMaybe<Array<TripsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TripsCreateOrConnectWithoutRoutesInput>>;
  create?: InputMaybe<Array<TripsCreateWithoutRoutesInput>>;
};

export type TripsCreateNestedOneWithoutStop_TimesInput = {
  connect?: InputMaybe<TripsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TripsCreateOrConnectWithoutStop_TimesInput>;
  create?: InputMaybe<TripsCreateWithoutStop_TimesInput>;
};

export type TripsCreateOrConnectWithoutRoutesInput = {
  create: TripsCreateWithoutRoutesInput;
  where: TripsWhereUniqueInput;
};

export type TripsCreateOrConnectWithoutStop_TimesInput = {
  create: TripsCreateWithoutStop_TimesInput;
  where: TripsWhereUniqueInput;
};

export type TripsCreateWithoutRoutesInput = {
  end_time: Scalars['Int'];
  service_id: Scalars['Int'];
  start_time: Scalars['Int'];
  stop_times?: InputMaybe<Stop_TimesCreateNestedManyWithoutTripsInput>;
  trip_headsign: Scalars['String'];
};

export type TripsCreateWithoutStop_TimesInput = {
  end_time: Scalars['Int'];
  routes: RoutesCreateNestedOneWithoutTripsInput;
  service_id: Scalars['Int'];
  start_time: Scalars['Int'];
  trip_headsign: Scalars['String'];
};

export type TripsGroupBy = {
  __typename?: 'TripsGroupBy';
  _avg?: Maybe<TripsAvgAggregate>;
  _count?: Maybe<TripsCountAggregate>;
  _max?: Maybe<TripsMaxAggregate>;
  _min?: Maybe<TripsMinAggregate>;
  _sum?: Maybe<TripsSumAggregate>;
  end_time: Scalars['Int'];
  route_id: Scalars['String'];
  service_id: Scalars['Int'];
  start_time: Scalars['Int'];
  trip_headsign: Scalars['String'];
  trip_id: Scalars['Int'];
};

export type TripsListRelationFilter = {
  every?: InputMaybe<TripsWhereInput>;
  none?: InputMaybe<TripsWhereInput>;
  some?: InputMaybe<TripsWhereInput>;
};

export type TripsMaxAggregate = {
  __typename?: 'TripsMaxAggregate';
  end_time?: Maybe<Scalars['Int']>;
  route_id?: Maybe<Scalars['String']>;
  service_id?: Maybe<Scalars['Int']>;
  start_time?: Maybe<Scalars['Int']>;
  trip_headsign?: Maybe<Scalars['String']>;
  trip_id?: Maybe<Scalars['Int']>;
};

export type TripsMaxOrderByAggregateInput = {
  end_time?: InputMaybe<SortOrder>;
  route_id?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  trip_headsign?: InputMaybe<SortOrder>;
  trip_id?: InputMaybe<SortOrder>;
};

export type TripsMinAggregate = {
  __typename?: 'TripsMinAggregate';
  end_time?: Maybe<Scalars['Int']>;
  route_id?: Maybe<Scalars['String']>;
  service_id?: Maybe<Scalars['Int']>;
  start_time?: Maybe<Scalars['Int']>;
  trip_headsign?: Maybe<Scalars['String']>;
  trip_id?: Maybe<Scalars['Int']>;
};

export type TripsMinOrderByAggregateInput = {
  end_time?: InputMaybe<SortOrder>;
  route_id?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  trip_headsign?: InputMaybe<SortOrder>;
  trip_id?: InputMaybe<SortOrder>;
};

export type TripsOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TripsOrderByWithAggregationInput = {
  _avg?: InputMaybe<TripsAvgOrderByAggregateInput>;
  _count?: InputMaybe<TripsCountOrderByAggregateInput>;
  _max?: InputMaybe<TripsMaxOrderByAggregateInput>;
  _min?: InputMaybe<TripsMinOrderByAggregateInput>;
  _sum?: InputMaybe<TripsSumOrderByAggregateInput>;
  end_time?: InputMaybe<SortOrder>;
  route_id?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  trip_headsign?: InputMaybe<SortOrder>;
  trip_id?: InputMaybe<SortOrder>;
};

export type TripsOrderByWithRelationInput = {
  end_time?: InputMaybe<SortOrder>;
  route_id?: InputMaybe<SortOrder>;
  routes?: InputMaybe<RoutesOrderByWithRelationInput>;
  service_id?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  stop_times?: InputMaybe<Stop_TimesOrderByRelationAggregateInput>;
  trip_headsign?: InputMaybe<SortOrder>;
  trip_id?: InputMaybe<SortOrder>;
};

export type TripsRelationFilter = {
  is?: InputMaybe<TripsWhereInput>;
  isNot?: InputMaybe<TripsWhereInput>;
};

export enum TripsScalarFieldEnum {
  EndTime = 'end_time',
  RouteId = 'route_id',
  ServiceId = 'service_id',
  StartTime = 'start_time',
  TripHeadsign = 'trip_headsign',
  TripId = 'trip_id'
}

export type TripsScalarWhereInput = {
  AND?: InputMaybe<Array<TripsScalarWhereInput>>;
  NOT?: InputMaybe<Array<TripsScalarWhereInput>>;
  OR?: InputMaybe<Array<TripsScalarWhereInput>>;
  end_time?: InputMaybe<IntFilter>;
  route_id?: InputMaybe<StringFilter>;
  service_id?: InputMaybe<IntFilter>;
  start_time?: InputMaybe<IntFilter>;
  trip_headsign?: InputMaybe<StringFilter>;
  trip_id?: InputMaybe<IntFilter>;
};

export type TripsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TripsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TripsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TripsScalarWhereWithAggregatesInput>>;
  end_time?: InputMaybe<IntWithAggregatesFilter>;
  route_id?: InputMaybe<StringWithAggregatesFilter>;
  service_id?: InputMaybe<IntWithAggregatesFilter>;
  start_time?: InputMaybe<IntWithAggregatesFilter>;
  trip_headsign?: InputMaybe<StringWithAggregatesFilter>;
  trip_id?: InputMaybe<IntWithAggregatesFilter>;
};

export type TripsSumAggregate = {
  __typename?: 'TripsSumAggregate';
  end_time?: Maybe<Scalars['Int']>;
  service_id?: Maybe<Scalars['Int']>;
  start_time?: Maybe<Scalars['Int']>;
  trip_id?: Maybe<Scalars['Int']>;
};

export type TripsSumOrderByAggregateInput = {
  end_time?: InputMaybe<SortOrder>;
  service_id?: InputMaybe<SortOrder>;
  start_time?: InputMaybe<SortOrder>;
  trip_id?: InputMaybe<SortOrder>;
};

export type TripsUpdateInput = {
  end_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  routes?: InputMaybe<RoutesUpdateOneRequiredWithoutTripsNestedInput>;
  service_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  start_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  stop_times?: InputMaybe<Stop_TimesUpdateManyWithoutTripsNestedInput>;
  trip_headsign?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TripsUpdateManyMutationInput = {
  end_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  service_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  start_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  trip_headsign?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TripsUpdateManyWithWhereWithoutRoutesInput = {
  data: TripsUpdateManyMutationInput;
  where: TripsScalarWhereInput;
};

export type TripsUpdateManyWithoutRoutesNestedInput = {
  connect?: InputMaybe<Array<TripsWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TripsCreateOrConnectWithoutRoutesInput>>;
  create?: InputMaybe<Array<TripsCreateWithoutRoutesInput>>;
  delete?: InputMaybe<Array<TripsWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TripsScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TripsWhereUniqueInput>>;
  set?: InputMaybe<Array<TripsWhereUniqueInput>>;
  update?: InputMaybe<Array<TripsUpdateWithWhereUniqueWithoutRoutesInput>>;
  updateMany?: InputMaybe<Array<TripsUpdateManyWithWhereWithoutRoutesInput>>;
  upsert?: InputMaybe<Array<TripsUpsertWithWhereUniqueWithoutRoutesInput>>;
};

export type TripsUpdateOneRequiredWithoutStop_TimesNestedInput = {
  connect?: InputMaybe<TripsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TripsCreateOrConnectWithoutStop_TimesInput>;
  create?: InputMaybe<TripsCreateWithoutStop_TimesInput>;
  update?: InputMaybe<TripsUpdateWithoutStop_TimesInput>;
  upsert?: InputMaybe<TripsUpsertWithoutStop_TimesInput>;
};

export type TripsUpdateWithWhereUniqueWithoutRoutesInput = {
  data: TripsUpdateWithoutRoutesInput;
  where: TripsWhereUniqueInput;
};

export type TripsUpdateWithoutRoutesInput = {
  end_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  service_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  start_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  stop_times?: InputMaybe<Stop_TimesUpdateManyWithoutTripsNestedInput>;
  trip_headsign?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TripsUpdateWithoutStop_TimesInput = {
  end_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  routes?: InputMaybe<RoutesUpdateOneRequiredWithoutTripsNestedInput>;
  service_id?: InputMaybe<IntFieldUpdateOperationsInput>;
  start_time?: InputMaybe<IntFieldUpdateOperationsInput>;
  trip_headsign?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TripsUpsertWithWhereUniqueWithoutRoutesInput = {
  create: TripsCreateWithoutRoutesInput;
  update: TripsUpdateWithoutRoutesInput;
  where: TripsWhereUniqueInput;
};

export type TripsUpsertWithoutStop_TimesInput = {
  create: TripsCreateWithoutStop_TimesInput;
  update: TripsUpdateWithoutStop_TimesInput;
};

export type TripsWhereInput = {
  AND?: InputMaybe<Array<TripsWhereInput>>;
  NOT?: InputMaybe<Array<TripsWhereInput>>;
  OR?: InputMaybe<Array<TripsWhereInput>>;
  end_time?: InputMaybe<IntFilter>;
  route_id?: InputMaybe<StringFilter>;
  routes?: InputMaybe<RoutesRelationFilter>;
  service_id?: InputMaybe<IntFilter>;
  start_time?: InputMaybe<IntFilter>;
  stop_times?: InputMaybe<Stop_TimesListRelationFilter>;
  trip_headsign?: InputMaybe<StringFilter>;
  trip_id?: InputMaybe<IntFilter>;
};

export type TripsWhereUniqueInput = {
  trip_id?: InputMaybe<Scalars['Int']>;
};

export type CountTripsQueryVariables = Exact<{ [key: string]: never; }>;


export type CountTripsQuery = { __typename?: 'Query', groupByTrips: Array<{ __typename?: 'TripsGroupBy', route_id: string, _count?: { __typename?: 'TripsCountAggregate', trip_id: number } | null }> };

export type FindManyRoutesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindManyRoutesQuery = { __typename?: 'Query', findManyRoutes: Array<{ __typename?: 'Routes', route_name: string, route_id: string, _count?: { __typename?: 'RoutesCount', trips: number } | null }> };

export type FindManyStopsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindManyStopsQuery = { __typename?: 'Query', findManyStops: Array<{ __typename?: 'Stops', stop_idx: number, stop_id: string, stop_name: string }> };

export type FindFirstTripQueryVariables = Exact<{
  where?: InputMaybe<TripsWhereInput>;
}>;


export type FindFirstTripQuery = { __typename?: 'Query', findFirstTrips?: { __typename?: 'Trips', start_time: number, end_time: number, trip_id: number, routes: { __typename?: 'Routes', route_id: string, route_name: string }, stop_times: Array<{ __typename?: 'Stop_times', arrival_time: number, departure_time: number, stop_idx: number, stops: { __typename?: 'Stops', stop_name: string, stop_id: string } }> } | null };

export type FindManyTripsQueryVariables = Exact<{
  where?: InputMaybe<TripsWhereInput>;
}>;


export type FindManyTripsQuery = { __typename?: 'Query', findManyTrips: Array<{ __typename?: 'Trips', route_id: string, trip_id: number, routes: { __typename?: 'Routes', route_name: string }, stop_times: Array<{ __typename?: 'Stop_times', stops: { __typename?: 'Stops', stop_id: string, stop_name: string } }> }> };


      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    

export const CountTripsDocument = `
    query CountTrips {
  groupByTrips(by: route_id) {
    _count {
      trip_id
    }
    route_id
  }
}
    `;
export const useCountTripsQuery = <
      TData = CountTripsQuery,
      TError = unknown
    >(
      variables?: CountTripsQueryVariables,
      options?: UseQueryOptions<CountTripsQuery, TError, TData>
    ) =>
    useQuery<CountTripsQuery, TError, TData>(
      variables === undefined ? ['CountTrips'] : ['CountTrips', variables],
      myFetcher<CountTripsQuery, CountTripsQueryVariables>(CountTripsDocument, variables),
      options
    );
export const FindManyRoutesDocument = `
    query FindManyRoutes {
  findManyRoutes(orderBy: [{route_name: asc}, {route_id: asc}]) {
    route_name
    route_id
    _count {
      trips
    }
  }
}
    `;
export const useFindManyRoutesQuery = <
      TData = FindManyRoutesQuery,
      TError = unknown
    >(
      variables?: FindManyRoutesQueryVariables,
      options?: UseQueryOptions<FindManyRoutesQuery, TError, TData>
    ) =>
    useQuery<FindManyRoutesQuery, TError, TData>(
      variables === undefined ? ['FindManyRoutes'] : ['FindManyRoutes', variables],
      myFetcher<FindManyRoutesQuery, FindManyRoutesQueryVariables>(FindManyRoutesDocument, variables),
      options
    );
export const FindManyStopsDocument = `
    query FindManyStops {
  findManyStops {
    stop_idx
    stop_id
    stop_name
  }
}
    `;
export const useFindManyStopsQuery = <
      TData = FindManyStopsQuery,
      TError = unknown
    >(
      variables?: FindManyStopsQueryVariables,
      options?: UseQueryOptions<FindManyStopsQuery, TError, TData>
    ) =>
    useQuery<FindManyStopsQuery, TError, TData>(
      variables === undefined ? ['FindManyStops'] : ['FindManyStops', variables],
      myFetcher<FindManyStopsQuery, FindManyStopsQueryVariables>(FindManyStopsDocument, variables),
      options
    );
export const FindFirstTripDocument = `
    query FindFirstTrip($where: TripsWhereInput) {
  findFirstTrips(where: $where) {
    routes {
      route_id
      route_name
    }
    stop_times {
      arrival_time
      departure_time
      stop_idx
      stops {
        stop_name
        stop_id
      }
    }
    start_time
    end_time
    trip_id
  }
}
    `;
export const useFindFirstTripQuery = <
      TData = FindFirstTripQuery,
      TError = unknown
    >(
      variables?: FindFirstTripQueryVariables,
      options?: UseQueryOptions<FindFirstTripQuery, TError, TData>
    ) =>
    useQuery<FindFirstTripQuery, TError, TData>(
      variables === undefined ? ['FindFirstTrip'] : ['FindFirstTrip', variables],
      myFetcher<FindFirstTripQuery, FindFirstTripQueryVariables>(FindFirstTripDocument, variables),
      options
    );
export const FindManyTripsDocument = `
    query FindManyTrips($where: TripsWhereInput) {
  findManyTrips(where: $where) {
    route_id
    trip_id
    routes {
      route_name
    }
    stop_times {
      stops {
        stop_id
        stop_name
      }
    }
  }
}
    `;
export const useFindManyTripsQuery = <
      TData = FindManyTripsQuery,
      TError = unknown
    >(
      variables?: FindManyTripsQueryVariables,
      options?: UseQueryOptions<FindManyTripsQuery, TError, TData>
    ) =>
    useQuery<FindManyTripsQuery, TError, TData>(
      variables === undefined ? ['FindManyTrips'] : ['FindManyTrips', variables],
      myFetcher<FindManyTripsQuery, FindManyTripsQueryVariables>(FindManyTripsDocument, variables),
      options
    );