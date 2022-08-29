"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = tslib_1.__importStar(require("./resolvers/relations/resolvers.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    Calendar: crudResolvers.CalendarCrudResolver,
    Calendar_dates: crudResolvers.Calendar_datesCrudResolver,
    Routes: crudResolvers.RoutesCrudResolver,
    Stop_times: crudResolvers.Stop_timesCrudResolver,
    Stops: crudResolvers.StopsCrudResolver,
    Trips: crudResolvers.TripsCrudResolver
};
const actionResolversMap = {
    Calendar: {
        aggregateCalendar: actionResolvers.AggregateCalendarResolver,
        createOneCalendar: actionResolvers.CreateOneCalendarResolver,
        deleteManyCalendar: actionResolvers.DeleteManyCalendarResolver,
        deleteOneCalendar: actionResolvers.DeleteOneCalendarResolver,
        findFirstCalendar: actionResolvers.FindFirstCalendarResolver,
        calendars: actionResolvers.FindManyCalendarResolver,
        calendar: actionResolvers.FindUniqueCalendarResolver,
        groupByCalendar: actionResolvers.GroupByCalendarResolver,
        updateManyCalendar: actionResolvers.UpdateManyCalendarResolver,
        updateOneCalendar: actionResolvers.UpdateOneCalendarResolver,
        upsertOneCalendar: actionResolvers.UpsertOneCalendarResolver
    },
    Calendar_dates: {
        aggregateCalendar_dates: actionResolvers.AggregateCalendar_datesResolver,
        createOneCalendar_dates: actionResolvers.CreateOneCalendar_datesResolver,
        deleteManyCalendar_dates: actionResolvers.DeleteManyCalendar_datesResolver,
        deleteOneCalendar_dates: actionResolvers.DeleteOneCalendar_datesResolver,
        findFirstCalendar_dates: actionResolvers.FindFirstCalendar_datesResolver,
        findManyCalendar_dates: actionResolvers.FindManyCalendar_datesResolver,
        findUniqueCalendar_dates: actionResolvers.FindUniqueCalendar_datesResolver,
        groupByCalendar_dates: actionResolvers.GroupByCalendar_datesResolver,
        updateManyCalendar_dates: actionResolvers.UpdateManyCalendar_datesResolver,
        updateOneCalendar_dates: actionResolvers.UpdateOneCalendar_datesResolver,
        upsertOneCalendar_dates: actionResolvers.UpsertOneCalendar_datesResolver
    },
    Routes: {
        aggregateRoutes: actionResolvers.AggregateRoutesResolver,
        createOneRoutes: actionResolvers.CreateOneRoutesResolver,
        deleteManyRoutes: actionResolvers.DeleteManyRoutesResolver,
        deleteOneRoutes: actionResolvers.DeleteOneRoutesResolver,
        findFirstRoutes: actionResolvers.FindFirstRoutesResolver,
        findManyRoutes: actionResolvers.FindManyRoutesResolver,
        findUniqueRoutes: actionResolvers.FindUniqueRoutesResolver,
        groupByRoutes: actionResolvers.GroupByRoutesResolver,
        updateManyRoutes: actionResolvers.UpdateManyRoutesResolver,
        updateOneRoutes: actionResolvers.UpdateOneRoutesResolver,
        upsertOneRoutes: actionResolvers.UpsertOneRoutesResolver
    },
    Stop_times: {
        aggregateStop_times: actionResolvers.AggregateStop_timesResolver,
        createOneStop_times: actionResolvers.CreateOneStop_timesResolver,
        deleteManyStop_times: actionResolvers.DeleteManyStop_timesResolver,
        deleteOneStop_times: actionResolvers.DeleteOneStop_timesResolver,
        findFirstStop_times: actionResolvers.FindFirstStop_timesResolver,
        findManyStop_times: actionResolvers.FindManyStop_timesResolver,
        findUniqueStop_times: actionResolvers.FindUniqueStop_timesResolver,
        groupByStop_times: actionResolvers.GroupByStop_timesResolver,
        updateManyStop_times: actionResolvers.UpdateManyStop_timesResolver,
        updateOneStop_times: actionResolvers.UpdateOneStop_timesResolver,
        upsertOneStop_times: actionResolvers.UpsertOneStop_timesResolver
    },
    Stops: {
        aggregateStops: actionResolvers.AggregateStopsResolver,
        createOneStops: actionResolvers.CreateOneStopsResolver,
        deleteManyStops: actionResolvers.DeleteManyStopsResolver,
        deleteOneStops: actionResolvers.DeleteOneStopsResolver,
        findFirstStops: actionResolvers.FindFirstStopsResolver,
        findManyStops: actionResolvers.FindManyStopsResolver,
        findUniqueStops: actionResolvers.FindUniqueStopsResolver,
        groupByStops: actionResolvers.GroupByStopsResolver,
        updateManyStops: actionResolvers.UpdateManyStopsResolver,
        updateOneStops: actionResolvers.UpdateOneStopsResolver,
        upsertOneStops: actionResolvers.UpsertOneStopsResolver
    },
    Trips: {
        aggregateTrips: actionResolvers.AggregateTripsResolver,
        createOneTrips: actionResolvers.CreateOneTripsResolver,
        deleteManyTrips: actionResolvers.DeleteManyTripsResolver,
        deleteOneTrips: actionResolvers.DeleteOneTripsResolver,
        findFirstTrips: actionResolvers.FindFirstTripsResolver,
        findManyTrips: actionResolvers.FindManyTripsResolver,
        findUniqueTrips: actionResolvers.FindUniqueTripsResolver,
        groupByTrips: actionResolvers.GroupByTripsResolver,
        updateManyTrips: actionResolvers.UpdateManyTripsResolver,
        updateOneTrips: actionResolvers.UpdateOneTripsResolver,
        upsertOneTrips: actionResolvers.UpsertOneTripsResolver
    }
};
const crudResolversInfo = {
    Calendar: ["aggregateCalendar", "createOneCalendar", "deleteManyCalendar", "deleteOneCalendar", "findFirstCalendar", "calendars", "calendar", "groupByCalendar", "updateManyCalendar", "updateOneCalendar", "upsertOneCalendar"],
    Calendar_dates: ["aggregateCalendar_dates", "createOneCalendar_dates", "deleteManyCalendar_dates", "deleteOneCalendar_dates", "findFirstCalendar_dates", "findManyCalendar_dates", "findUniqueCalendar_dates", "groupByCalendar_dates", "updateManyCalendar_dates", "updateOneCalendar_dates", "upsertOneCalendar_dates"],
    Routes: ["aggregateRoutes", "createOneRoutes", "deleteManyRoutes", "deleteOneRoutes", "findFirstRoutes", "findManyRoutes", "findUniqueRoutes", "groupByRoutes", "updateManyRoutes", "updateOneRoutes", "upsertOneRoutes"],
    Stop_times: ["aggregateStop_times", "createOneStop_times", "deleteManyStop_times", "deleteOneStop_times", "findFirstStop_times", "findManyStop_times", "findUniqueStop_times", "groupByStop_times", "updateManyStop_times", "updateOneStop_times", "upsertOneStop_times"],
    Stops: ["aggregateStops", "createOneStops", "deleteManyStops", "deleteOneStops", "findFirstStops", "findManyStops", "findUniqueStops", "groupByStops", "updateManyStops", "updateOneStops", "upsertOneStops"],
    Trips: ["aggregateTrips", "createOneTrips", "deleteManyTrips", "deleteOneTrips", "findFirstTrips", "findManyTrips", "findUniqueTrips", "groupByTrips", "updateManyTrips", "updateOneTrips", "upsertOneTrips"]
};
const argsInfo = {
    AggregateCalendarArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneCalendarArgs: ["data"],
    DeleteManyCalendarArgs: ["where"],
    DeleteOneCalendarArgs: ["where"],
    FindFirstCalendarArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCalendarArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCalendarArgs: ["where"],
    GroupByCalendarArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCalendarArgs: ["data", "where"],
    UpdateOneCalendarArgs: ["data", "where"],
    UpsertOneCalendarArgs: ["where", "create", "update"],
    AggregateCalendar_datesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneCalendar_datesArgs: ["data"],
    DeleteManyCalendar_datesArgs: ["where"],
    DeleteOneCalendar_datesArgs: ["where"],
    FindFirstCalendar_datesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyCalendar_datesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueCalendar_datesArgs: ["where"],
    GroupByCalendar_datesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyCalendar_datesArgs: ["data", "where"],
    UpdateOneCalendar_datesArgs: ["data", "where"],
    UpsertOneCalendar_datesArgs: ["where", "create", "update"],
    AggregateRoutesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneRoutesArgs: ["data"],
    DeleteManyRoutesArgs: ["where"],
    DeleteOneRoutesArgs: ["where"],
    FindFirstRoutesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyRoutesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueRoutesArgs: ["where"],
    GroupByRoutesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyRoutesArgs: ["data", "where"],
    UpdateOneRoutesArgs: ["data", "where"],
    UpsertOneRoutesArgs: ["where", "create", "update"],
    AggregateStop_timesArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneStop_timesArgs: ["data"],
    DeleteManyStop_timesArgs: ["where"],
    DeleteOneStop_timesArgs: ["where"],
    FindFirstStop_timesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyStop_timesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueStop_timesArgs: ["where"],
    GroupByStop_timesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyStop_timesArgs: ["data", "where"],
    UpdateOneStop_timesArgs: ["data", "where"],
    UpsertOneStop_timesArgs: ["where", "create", "update"],
    AggregateStopsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneStopsArgs: ["data"],
    DeleteManyStopsArgs: ["where"],
    DeleteOneStopsArgs: ["where"],
    FindFirstStopsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyStopsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueStopsArgs: ["where"],
    GroupByStopsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyStopsArgs: ["data", "where"],
    UpdateOneStopsArgs: ["data", "where"],
    UpsertOneStopsArgs: ["where", "create", "update"],
    AggregateTripsArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateOneTripsArgs: ["data"],
    DeleteManyTripsArgs: ["where"],
    DeleteOneTripsArgs: ["where"],
    FindFirstTripsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyTripsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueTripsArgs: ["where"],
    GroupByTripsArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyTripsArgs: ["data", "where"],
    UpdateOneTripsArgs: ["data", "where"],
    UpsertOneTripsArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    Routes: relationResolvers.RoutesRelationsResolver,
    Stop_times: relationResolvers.Stop_timesRelationsResolver,
    Stops: relationResolvers.StopsRelationsResolver,
    Trips: relationResolvers.TripsRelationsResolver
};
const relationResolversInfo = {
    Routes: ["trips"],
    Stop_times: ["stops", "trips"],
    Stops: ["stop_times"],
    Trips: ["routes", "stop_times"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        if (relationResolverActionsConfig._all) {
            const allActionsDecorators = relationResolverActionsConfig._all;
            const relationResolverActionNames = relationResolversInfo[modelName];
            for (const relationResolverActionName of relationResolverActionNames) {
                tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
            }
        }
        const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(it => it !== "_all");
        for (const relationResolverActionName of relationResolverActionsToApply) {
            const decorators = relationResolverActionsConfig[relationResolverActionName];
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    Calendar: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date"],
    Calendar_dates: ["idx", "service_id", "date", "is_removing"],
    Routes: ["route_id", "route_name"],
    Stop_times: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx"],
    Stops: ["stop_idx", "stop_id", "stop_name"],
    Trips: ["route_id", "service_id", "trip_id", "trip_headsign", "start_time", "end_time"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateCalendar: ["_count", "_avg", "_sum", "_min", "_max"],
    CalendarGroupBy: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateCalendar_dates: ["_count", "_avg", "_sum", "_min", "_max"],
    Calendar_datesGroupBy: ["idx", "service_id", "date", "is_removing", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateRoutes: ["_count", "_min", "_max"],
    RoutesGroupBy: ["route_id", "route_name", "_count", "_min", "_max"],
    AggregateStop_times: ["_count", "_avg", "_sum", "_min", "_max"],
    Stop_timesGroupBy: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateStops: ["_count", "_avg", "_sum", "_min", "_max"],
    StopsGroupBy: ["stop_idx", "stop_id", "stop_name", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateTrips: ["_count", "_avg", "_sum", "_min", "_max"],
    TripsGroupBy: ["route_id", "service_id", "trip_id", "trip_headsign", "start_time", "end_time", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    CalendarCountAggregate: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date", "_all"],
    CalendarAvgAggregate: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    CalendarSumAggregate: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    CalendarMinAggregate: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date"],
    CalendarMaxAggregate: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date"],
    Calendar_datesCountAggregate: ["idx", "service_id", "date", "is_removing", "_all"],
    Calendar_datesAvgAggregate: ["idx", "service_id", "is_removing"],
    Calendar_datesSumAggregate: ["idx", "service_id", "is_removing"],
    Calendar_datesMinAggregate: ["idx", "service_id", "date", "is_removing"],
    Calendar_datesMaxAggregate: ["idx", "service_id", "date", "is_removing"],
    RoutesCount: ["trips"],
    RoutesCountAggregate: ["route_id", "route_name", "_all"],
    RoutesMinAggregate: ["route_id", "route_name"],
    RoutesMaxAggregate: ["route_id", "route_name"],
    Stop_timesCountAggregate: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx", "_all"],
    Stop_timesAvgAggregate: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx"],
    Stop_timesSumAggregate: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx"],
    Stop_timesMinAggregate: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx"],
    Stop_timesMaxAggregate: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx"],
    StopsCount: ["stop_times"],
    StopsCountAggregate: ["stop_idx", "stop_id", "stop_name", "_all"],
    StopsAvgAggregate: ["stop_idx"],
    StopsSumAggregate: ["stop_idx"],
    StopsMinAggregate: ["stop_idx", "stop_id", "stop_name"],
    StopsMaxAggregate: ["stop_idx", "stop_id", "stop_name"],
    TripsCount: ["stop_times"],
    TripsCountAggregate: ["route_id", "service_id", "trip_id", "trip_headsign", "start_time", "end_time", "_all"],
    TripsAvgAggregate: ["service_id", "trip_id", "start_time", "end_time"],
    TripsSumAggregate: ["service_id", "trip_id", "start_time", "end_time"],
    TripsMinAggregate: ["route_id", "service_id", "trip_id", "trip_headsign", "start_time", "end_time"],
    TripsMaxAggregate: ["route_id", "service_id", "trip_id", "trip_headsign", "start_time", "end_time"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    CalendarWhereInput: ["AND", "OR", "NOT", "service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date"],
    CalendarOrderByWithRelationInput: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date"],
    CalendarWhereUniqueInput: ["service_id"],
    CalendarOrderByWithAggregationInput: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date", "_count", "_avg", "_max", "_min", "_sum"],
    CalendarScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date"],
    Calendar_datesWhereInput: ["AND", "OR", "NOT", "idx", "service_id", "date", "is_removing"],
    Calendar_datesOrderByWithRelationInput: ["idx", "service_id", "date", "is_removing"],
    Calendar_datesWhereUniqueInput: ["idx"],
    Calendar_datesOrderByWithAggregationInput: ["idx", "service_id", "date", "is_removing", "_count", "_avg", "_max", "_min", "_sum"],
    Calendar_datesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "idx", "service_id", "date", "is_removing"],
    RoutesWhereInput: ["AND", "OR", "NOT", "route_id", "route_name", "trips"],
    RoutesOrderByWithRelationInput: ["route_id", "route_name", "trips"],
    RoutesWhereUniqueInput: ["route_id"],
    RoutesOrderByWithAggregationInput: ["route_id", "route_name", "_count", "_max", "_min"],
    RoutesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "route_id", "route_name"],
    Stop_timesWhereInput: ["AND", "OR", "NOT", "idx", "trip_id", "arrival_time", "departure_time", "stop_idx", "stops", "trips"],
    Stop_timesOrderByWithRelationInput: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx", "stops", "trips"],
    Stop_timesWhereUniqueInput: ["idx"],
    Stop_timesOrderByWithAggregationInput: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx", "_count", "_avg", "_max", "_min", "_sum"],
    Stop_timesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "idx", "trip_id", "arrival_time", "departure_time", "stop_idx"],
    StopsWhereInput: ["AND", "OR", "NOT", "stop_idx", "stop_id", "stop_name", "stop_times"],
    StopsOrderByWithRelationInput: ["stop_idx", "stop_id", "stop_name", "stop_times"],
    StopsWhereUniqueInput: ["stop_idx"],
    StopsOrderByWithAggregationInput: ["stop_idx", "stop_id", "stop_name", "_count", "_avg", "_max", "_min", "_sum"],
    StopsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "stop_idx", "stop_id", "stop_name"],
    TripsWhereInput: ["AND", "OR", "NOT", "route_id", "service_id", "trip_id", "trip_headsign", "start_time", "end_time", "routes", "stop_times"],
    TripsOrderByWithRelationInput: ["route_id", "service_id", "trip_id", "trip_headsign", "start_time", "end_time", "routes", "stop_times"],
    TripsWhereUniqueInput: ["trip_id"],
    TripsOrderByWithAggregationInput: ["route_id", "service_id", "trip_id", "trip_headsign", "start_time", "end_time", "_count", "_avg", "_max", "_min", "_sum"],
    TripsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "route_id", "service_id", "trip_id", "trip_headsign", "start_time", "end_time"],
    CalendarCreateInput: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date"],
    CalendarUpdateInput: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date"],
    CalendarUpdateManyMutationInput: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date"],
    Calendar_datesCreateInput: ["service_id", "date", "is_removing"],
    Calendar_datesUpdateInput: ["service_id", "date", "is_removing"],
    Calendar_datesUpdateManyMutationInput: ["service_id", "date", "is_removing"],
    RoutesCreateInput: ["route_id", "route_name", "trips"],
    RoutesUpdateInput: ["route_id", "route_name", "trips"],
    RoutesUpdateManyMutationInput: ["route_id", "route_name"],
    Stop_timesCreateInput: ["arrival_time", "departure_time", "stops", "trips"],
    Stop_timesUpdateInput: ["arrival_time", "departure_time", "stops", "trips"],
    Stop_timesUpdateManyMutationInput: ["arrival_time", "departure_time"],
    StopsCreateInput: ["stop_id", "stop_name", "stop_times"],
    StopsUpdateInput: ["stop_id", "stop_name", "stop_times"],
    StopsUpdateManyMutationInput: ["stop_id", "stop_name"],
    TripsCreateInput: ["service_id", "trip_headsign", "start_time", "end_time", "routes", "stop_times"],
    TripsUpdateInput: ["service_id", "trip_headsign", "start_time", "end_time", "routes", "stop_times"],
    TripsUpdateManyMutationInput: ["service_id", "trip_headsign", "start_time", "end_time"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    CalendarCountOrderByAggregateInput: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date"],
    CalendarAvgOrderByAggregateInput: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    CalendarMaxOrderByAggregateInput: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date"],
    CalendarMinOrderByAggregateInput: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday", "start_date", "end_date"],
    CalendarSumOrderByAggregateInput: ["service_id", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    Calendar_datesCountOrderByAggregateInput: ["idx", "service_id", "date", "is_removing"],
    Calendar_datesAvgOrderByAggregateInput: ["idx", "service_id", "is_removing"],
    Calendar_datesMaxOrderByAggregateInput: ["idx", "service_id", "date", "is_removing"],
    Calendar_datesMinOrderByAggregateInput: ["idx", "service_id", "date", "is_removing"],
    Calendar_datesSumOrderByAggregateInput: ["idx", "service_id", "is_removing"],
    TripsListRelationFilter: ["every", "some", "none"],
    TripsOrderByRelationAggregateInput: ["_count"],
    RoutesCountOrderByAggregateInput: ["route_id", "route_name"],
    RoutesMaxOrderByAggregateInput: ["route_id", "route_name"],
    RoutesMinOrderByAggregateInput: ["route_id", "route_name"],
    StopsRelationFilter: ["is", "isNot"],
    TripsRelationFilter: ["is", "isNot"],
    Stop_timesCountOrderByAggregateInput: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx"],
    Stop_timesAvgOrderByAggregateInput: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx"],
    Stop_timesMaxOrderByAggregateInput: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx"],
    Stop_timesMinOrderByAggregateInput: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx"],
    Stop_timesSumOrderByAggregateInput: ["idx", "trip_id", "arrival_time", "departure_time", "stop_idx"],
    Stop_timesListRelationFilter: ["every", "some", "none"],
    Stop_timesOrderByRelationAggregateInput: ["_count"],
    StopsCountOrderByAggregateInput: ["stop_idx", "stop_id", "stop_name"],
    StopsAvgOrderByAggregateInput: ["stop_idx"],
    StopsMaxOrderByAggregateInput: ["stop_idx", "stop_id", "stop_name"],
    StopsMinOrderByAggregateInput: ["stop_idx", "stop_id", "stop_name"],
    StopsSumOrderByAggregateInput: ["stop_idx"],
    RoutesRelationFilter: ["is", "isNot"],
    TripsCountOrderByAggregateInput: ["route_id", "service_id", "trip_id", "trip_headsign", "start_time", "end_time"],
    TripsAvgOrderByAggregateInput: ["service_id", "trip_id", "start_time", "end_time"],
    TripsMaxOrderByAggregateInput: ["route_id", "service_id", "trip_id", "trip_headsign", "start_time", "end_time"],
    TripsMinOrderByAggregateInput: ["route_id", "service_id", "trip_id", "trip_headsign", "start_time", "end_time"],
    TripsSumOrderByAggregateInput: ["service_id", "trip_id", "start_time", "end_time"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    StringFieldUpdateOperationsInput: ["set"],
    TripsCreateNestedManyWithoutRoutesInput: ["create", "connectOrCreate", "connect"],
    TripsUpdateManyWithoutRoutesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    StopsCreateNestedOneWithoutStop_timesInput: ["create", "connectOrCreate", "connect"],
    TripsCreateNestedOneWithoutStop_timesInput: ["create", "connectOrCreate", "connect"],
    StopsUpdateOneRequiredWithoutStop_timesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    TripsUpdateOneRequiredWithoutStop_timesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    Stop_timesCreateNestedManyWithoutStopsInput: ["create", "connectOrCreate", "connect"],
    Stop_timesUpdateManyWithoutStopsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    RoutesCreateNestedOneWithoutTripsInput: ["create", "connectOrCreate", "connect"],
    Stop_timesCreateNestedManyWithoutTripsInput: ["create", "connectOrCreate", "connect"],
    RoutesUpdateOneRequiredWithoutTripsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    Stop_timesUpdateManyWithoutTripsNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    TripsCreateWithoutRoutesInput: ["service_id", "trip_headsign", "start_time", "end_time", "stop_times"],
    TripsCreateOrConnectWithoutRoutesInput: ["where", "create"],
    TripsUpsertWithWhereUniqueWithoutRoutesInput: ["where", "update", "create"],
    TripsUpdateWithWhereUniqueWithoutRoutesInput: ["where", "data"],
    TripsUpdateManyWithWhereWithoutRoutesInput: ["where", "data"],
    TripsScalarWhereInput: ["AND", "OR", "NOT", "route_id", "service_id", "trip_id", "trip_headsign", "start_time", "end_time"],
    StopsCreateWithoutStop_timesInput: ["stop_id", "stop_name"],
    StopsCreateOrConnectWithoutStop_timesInput: ["where", "create"],
    TripsCreateWithoutStop_timesInput: ["service_id", "trip_headsign", "start_time", "end_time", "routes"],
    TripsCreateOrConnectWithoutStop_timesInput: ["where", "create"],
    StopsUpsertWithoutStop_timesInput: ["update", "create"],
    StopsUpdateWithoutStop_timesInput: ["stop_id", "stop_name"],
    TripsUpsertWithoutStop_timesInput: ["update", "create"],
    TripsUpdateWithoutStop_timesInput: ["service_id", "trip_headsign", "start_time", "end_time", "routes"],
    Stop_timesCreateWithoutStopsInput: ["arrival_time", "departure_time", "trips"],
    Stop_timesCreateOrConnectWithoutStopsInput: ["where", "create"],
    Stop_timesUpsertWithWhereUniqueWithoutStopsInput: ["where", "update", "create"],
    Stop_timesUpdateWithWhereUniqueWithoutStopsInput: ["where", "data"],
    Stop_timesUpdateManyWithWhereWithoutStopsInput: ["where", "data"],
    Stop_timesScalarWhereInput: ["AND", "OR", "NOT", "idx", "trip_id", "arrival_time", "departure_time", "stop_idx"],
    RoutesCreateWithoutTripsInput: ["route_id", "route_name"],
    RoutesCreateOrConnectWithoutTripsInput: ["where", "create"],
    Stop_timesCreateWithoutTripsInput: ["arrival_time", "departure_time", "stops"],
    Stop_timesCreateOrConnectWithoutTripsInput: ["where", "create"],
    RoutesUpsertWithoutTripsInput: ["update", "create"],
    RoutesUpdateWithoutTripsInput: ["route_id", "route_name"],
    Stop_timesUpsertWithWhereUniqueWithoutTripsInput: ["where", "update", "create"],
    Stop_timesUpdateWithWhereUniqueWithoutTripsInput: ["where", "data"],
    Stop_timesUpdateManyWithWhereWithoutTripsInput: ["where", "data"],
    TripsUpdateWithoutRoutesInput: ["service_id", "trip_headsign", "start_time", "end_time", "stop_times"],
    Stop_timesUpdateWithoutStopsInput: ["arrival_time", "departure_time", "trips"],
    Stop_timesUpdateWithoutTripsInput: ["arrival_time", "departure_time", "stops"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
