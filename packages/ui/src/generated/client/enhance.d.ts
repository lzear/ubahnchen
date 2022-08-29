import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
declare const crudResolversMap: {
    Calendar: typeof crudResolvers.CalendarCrudResolver;
    Calendar_dates: typeof crudResolvers.Calendar_datesCrudResolver;
    Routes: typeof crudResolvers.RoutesCrudResolver;
    Stop_times: typeof crudResolvers.Stop_timesCrudResolver;
    Stops: typeof crudResolvers.StopsCrudResolver;
    Trips: typeof crudResolvers.TripsCrudResolver;
};
declare type ResolverModelNames = keyof typeof crudResolversMap;
declare type ModelResolverActionNames<TModel extends ResolverModelNames> = keyof typeof crudResolversMap[TModel]["prototype"];
export declare type ResolverActionsConfig<TModel extends ResolverModelNames> = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;
export declare type ResolversEnhanceMap = {
    [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};
export declare function applyResolversEnhanceMap(resolversEnhanceMap: ResolversEnhanceMap): void;
declare type ArgsTypesNames = keyof typeof argsTypes;
declare type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<keyof typeof argsTypes[TArgsType]["prototype"], number | symbol>;
declare type ArgFieldsConfig<TArgsType extends ArgsTypesNames> = FieldsConfig<ArgFieldNames<TArgsType>>;
export declare type ArgConfig<TArgsType extends ArgsTypesNames> = {
    class?: ClassDecorator[];
    fields?: ArgFieldsConfig<TArgsType>;
};
export declare type ArgsTypesEnhanceMap = {
    [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};
export declare function applyArgsTypesEnhanceMap(argsTypesEnhanceMap: ArgsTypesEnhanceMap): void;
declare const relationResolversMap: {
    Routes: typeof relationResolvers.RoutesRelationsResolver;
    Stop_times: typeof relationResolvers.Stop_timesRelationsResolver;
    Stops: typeof relationResolvers.StopsRelationsResolver;
    Trips: typeof relationResolvers.TripsRelationsResolver;
};
declare type RelationResolverModelNames = keyof typeof relationResolversMap;
declare type RelationResolverActionNames<TModel extends RelationResolverModelNames> = keyof typeof relationResolversMap[TModel]["prototype"];
export declare type RelationResolverActionsConfig<TModel extends RelationResolverModelNames> = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;
export declare type RelationResolversEnhanceMap = {
    [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};
export declare function applyRelationResolversEnhanceMap(relationResolversEnhanceMap: RelationResolversEnhanceMap): void;
declare type FieldsConfig<TTypeKeys extends string = string> = Partial<Record<TTypeKeys | "_all", PropertyDecorator[]>>;
declare type ModelNames = keyof typeof models;
declare type ModelFieldNames<TModel extends ModelNames> = Exclude<keyof typeof models[TModel]["prototype"], number | symbol>;
declare type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<ModelFieldNames<TModel>>;
export declare type ModelConfig<TModel extends ModelNames> = {
    class?: ClassDecorator[];
    fields?: ModelFieldsConfig<TModel>;
};
export declare type ModelsEnhanceMap = {
    [TModel in ModelNames]?: ModelConfig<TModel>;
};
export declare function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap): void;
declare type OutputTypesNames = keyof typeof outputTypes;
declare type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<keyof typeof outputTypes[TOutput]["prototype"], number | symbol>;
declare type OutputTypeFieldsConfig<TOutput extends OutputTypesNames> = FieldsConfig<OutputTypeFieldNames<TOutput>>;
export declare type OutputTypeConfig<TOutput extends OutputTypesNames> = {
    class?: ClassDecorator[];
    fields?: OutputTypeFieldsConfig<TOutput>;
};
export declare type OutputTypesEnhanceMap = {
    [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};
export declare function applyOutputTypesEnhanceMap(outputTypesEnhanceMap: OutputTypesEnhanceMap): void;
declare type InputTypesNames = keyof typeof inputTypes;
declare type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<keyof typeof inputTypes[TInput]["prototype"], number | symbol>;
declare type InputTypeFieldsConfig<TInput extends InputTypesNames> = FieldsConfig<InputTypeFieldNames<TInput>>;
export declare type InputTypeConfig<TInput extends InputTypesNames> = {
    class?: ClassDecorator[];
    fields?: InputTypeFieldsConfig<TInput>;
};
export declare type InputTypesEnhanceMap = {
    [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};
export declare function applyInputTypesEnhanceMap(inputTypesEnhanceMap: InputTypesEnhanceMap): void;
export {};
