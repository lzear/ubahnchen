// eslint-disable-next-line import/no-extraneous-dependencies
import { defineProject, mergeConfig } from 'vitest/config'

import configShared from '../../libs/tsconfig/vitest.shared'

export default mergeConfig(configShared, defineProject({}))
