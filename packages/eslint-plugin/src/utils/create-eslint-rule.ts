/* eslint-disable */
import * as eslintUtils from '@typescript-eslint/utils'
import {RuleWithMetaAndName} from "@typescript-eslint/utils/eslint-utils";
import {RuleListener, RuleModule} from "@typescript-eslint/utils/ts-eslint";

export let createEslintRule: <
  TOptions extends readonly unknown[],
  TMessageIds extends string,
>({
  name,
  meta,
  ...rule
}: Readonly<RuleWithMetaAndName<TOptions, TMessageIds>>) => RuleModule<
  TMessageIds,
  TOptions,
  RuleListener
> = eslintUtils.ESLintUtils.RuleCreator(
  ruleName => `https://www.dont.ninja/rules/${ruleName}`,
)
